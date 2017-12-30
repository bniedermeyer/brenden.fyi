import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import * as marked from 'marked';

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
    this.blogService.parseBlogPost(postName).subscribe(blogPost => {
      this.blogContent = of(marked.parse(blogPost.body));
      this.blogTitle = of((<BlogAttributes>blogPost.attributes).postTitle);
      this.blogDate = of((<BlogAttributes>blogPost.attributes).date);
    });
  }
}
