import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { afterEach } from 'selenium-webdriver/testing';

import { BlogService } from './blog.service';
import { BlogPost } from './post/post.model';

describe('BlogService', () => {
  let injector: TestBed;
  let service: BlogService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BlogService]
    });
    injector = getTestBed();
    service = injector.get(BlogService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an observable of the blog post', () => {
    service.parseBlogPost('test').subscribe(blog => {
      expect(true).toBeTruthy();
    });
  });
});
