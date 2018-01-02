import { inject } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtmlPipe } from './safe-html.pipe';

describe('SafeHtmlPipe', () => {
  let pipe: SafeHtmlPipe;
  beforeEach(
    inject([DomSanitizer], sanitizer => {
      pipe = new SafeHtmlPipe(sanitizer);
    })
  );

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
