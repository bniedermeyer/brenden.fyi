import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import * as fm from 'front-matter';
import { BlogAttributes, BlogPost } from './post/post.model';

@Injectable()
export class BlogService {
  constructor(private http: HttpClient) {}

  parseBlogPost(postName: string): Observable<BlogPost> {
    const filePath = '/assets/blog/posts/' + postName + '.md';
    return this.http.get(filePath, { responseType: 'text' }).pipe(
      map(data => {
        const post = fm(data);
        const blog: BlogPost = {
          attributes: <BlogAttributes>post.attributes,
          body: post.body,
          frontmatter: post.frontmatter
        };
        return blog;
      })
    );
  }
}
