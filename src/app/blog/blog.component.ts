import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BlogService } from './blog.service';
import { BlogPostMetadata } from './post/post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts: Observable<BlogPostMetadata[]>;

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.posts = this.blogService.getBlogPosts();
  }
}
