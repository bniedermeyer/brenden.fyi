import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import * as fm from 'front-matter';

@Injectable()
export class BlogService {
  constructor(private http: HttpClient) {}

  parseBlogPost(postName: string) {
    const filePath = '/assets/blog/posts/' + postName + '.md';
    return this.http.get(filePath, { responseType: 'text' }).pipe(map(data => fm(data)));
  }
}
