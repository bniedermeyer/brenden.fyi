import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [
  // {
  //   path: '',
  //   children: []
  // }
  {
    path: '',
    component: IntroComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
