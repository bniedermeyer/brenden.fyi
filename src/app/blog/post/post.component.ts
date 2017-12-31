import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import * as marked from 'marked';
import * as highlightjs from 'highlight.js';

import { BlogService } from '../blog.service';
import { BlogAttributes, BlogPost } from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  blogContent: Observable<string>;
  blogTitle: Observable<string>;
  blogDate: Observable<string>;

  constructor(private blogService: BlogService, private route: ActivatedRoute) {}

  ngOnInit() {
    const postName = this.route.snapshot.params.postTitle;
    // from https://shuheikagawa.com/blog/2015/09/21/using-highlight-js-with-marked/
    const renderer = new marked.Renderer();
    renderer.code = (code, language) => {
      // Check whether the given language is valid for highlight.js.
      const validLang = !!(language && highlightjs.getLanguage(language));
      // Highlight only if the language is valid.
      const highlighted = validLang ? highlightjs.highlight(language, code).value : code;
      // Render the highlighted code with `hljs` class.
      return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
    };
    marked.setOptions({ renderer });

    this.blogService.parseBlogPost(postName).subscribe(blogPost => {
      this.blogContent = of(marked.parse(blogPost.body));
      this.blogTitle = of((<BlogAttributes>blogPost.attributes).postTitle);
      this.blogDate = of((<BlogAttributes>blogPost.attributes).date);
    });
  }
}
