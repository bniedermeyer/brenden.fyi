import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule, MatCardModule, MatListModule, MatSidenavModule, MatIconModule, MatButtonModule,
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
  ],
  exports: [MatToolbarModule, MatCardModule, MatListModule, MatSidenavModule, MatIconModule, MatButtonModule]
})
export class AppMaterialComponentsModule { }
