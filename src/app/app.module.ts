import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MATERIAL_COMPATIBILITY_MODE } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResumeModule } from './resume/resume.module';
import { AppMaterialComponentsModule } from './app-material-components.module';
import { OverlayComponent } from './shared/overlay/overlay.component';
import { IntroComponent } from './intro/intro.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OverlayComponent,
    IntroComponent,

  ],
  imports:      [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppMaterialComponentsModule,
    ResumeModule,
  ],
  providers:    [
    {provide: MATERIAL_COMPATIBILITY_MODE, useValue: true}
  ],
  bootstrap:    [AppComponent],
})
export class AppModule {
}
