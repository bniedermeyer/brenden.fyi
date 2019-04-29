import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ResumeComponent } from './resume.component';
import { ContactComponent } from './contact/contact.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { AwardsComponent } from './awards/awards.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppMaterialComponentsModule} from '../app-material-components.module';
import { ResumeService } from './resume.service';
import { CommunityComponent } from './community/community.component';


@NgModule({
  imports:      [
    CommonModule,
    FlexLayoutModule,
    AppMaterialComponentsModule
  ],
  declarations: [ResumeComponent, ContactComponent, WorkExperienceComponent, SkillsComponent, EducationComponent, AwardsComponent, ProjectsComponent, CommunityComponent],
  providers: [ResumeService]
})
export class ResumeModule {
}
