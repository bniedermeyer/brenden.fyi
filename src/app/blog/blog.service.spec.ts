import { TestBed, inject } from '@angular/core/testing';

import { BlogService } from './blog.service';

describe('BlogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogService]
    });
  });

  fit(
    'should be created',
    inject([BlogService], (service: BlogService) => {
      expect(service).toBeTruthy();
    })
  );

  it(
    'should return the blog object',
    inject([BlogService], (service: BlogService) => {
      service.parseBlogPost('test').subscribe(data => {
        expect(data).toBeTruthy();
      });
    })
  );
});
