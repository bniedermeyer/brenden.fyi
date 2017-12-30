import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { PostComponent } from './post/post.component';
import { BlogService } from './blog.service';

@NgModule({
  imports: [CommonModule, BlogRoutingModule],
  declarations: [BlogComponent, PostComponent],
  providers: [BlogService]
})
export class BlogModule {}
