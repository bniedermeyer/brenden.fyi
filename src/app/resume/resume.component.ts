import { Component, OnInit } from '@angular/core';

import { Position } from '../shared/position';
import { Skill } from '../shared/skill';
import { Education } from '../shared/education';
import { Award } from '../shared/award';
import { Project } from '../shared/project';
import { ResumeService } from './resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  positions: Position[];

  skills: Skill[];

  degrees: Education[];

  awards: Award[];

  projects: Project[];

  communityPositions: Position[];

  constructor(private resumeService: ResumeService) {
    this.positions = resumeService.getWorkExperience();
    this.skills = resumeService.getSkills();
    this.degrees = resumeService.getEducation();
    this.awards = resumeService.getAwards();
    this.projects = resumeService.getProjects();
    this.communityPositions = resumeService.getCommunity();
  }

  ngOnInit() {}
}
