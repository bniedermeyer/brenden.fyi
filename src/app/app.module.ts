import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeModule } from './resume/resume.module';
import { AppMaterialComponentsModule } from './app-material-components.module';
import { NavigationComponent } from './navigation/navigation.component';
import { SocialLinksComponent } from './navigation/social-links/social-links.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, SocialLinksComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppMaterialComponentsModule,
    ResumeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
