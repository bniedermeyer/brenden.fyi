import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import * as fm from 'front-matter';

import { BlogAttributes, BlogPost, BlogPostMetadata } from './post/post.model';

/**
 * This service helps load a blog post from a markdown file
 */
@Injectable()
export class BlogService {
  constructor(private http: HttpClient) {}

  /**
   * Parses a blog post from a markdown file. First calls front-matter to load the data and
   * then return an observable of the blog post.
   *
   * @param {string} postName
   * @returns {Observable<BlogPost>}
   */
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

  /**
   * Returns a list of metadata about all blog posts.
   * @returns {Observable<BlogPostMetadata[]>}
   */
  getBlogPosts(): Observable<BlogPostMetadata[]> {
    return this.http.get<BlogPostMetadata[]>('/assets/blog/blog-index.json');
  }
}
