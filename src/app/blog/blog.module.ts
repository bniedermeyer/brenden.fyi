import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { PostComponent } from './post/post.component';
import { BlogService } from './blog.service';
import { SafeHtmlPipe } from '../shared/pipes/safe-html.pipe';

@NgModule({
  imports: [CommonModule, BlogRoutingModule, FlexLayoutModule, MatCardModule],
  declarations: [BlogComponent, PostComponent, SafeHtmlPipe],
  providers: [BlogService]
})
export class BlogModule {}
