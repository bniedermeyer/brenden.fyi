import { Injectable } from '@angular/core';

import * as resumeData from 'assets/json/resume.json';
import { Skill } from '../shared/skill';
import { Position } from '../shared/position';
import { Project } from '../shared/project';
import { Education } from '../shared/education';
import { Award } from '../shared/award';

@Injectable()
export class ResumeService {
  getWorkExperience(): Position[] {
    return (<any>resumeData).positions;
  }

  getSkills(): Skill[] {
    return (<any>resumeData).skills;
  }

  getProjects(): Project[] {
    return (<any>resumeData).projects;
  }

  getEducation(): Education[] {
    return (<any>resumeData).degrees;
  }

  getAwards(): Award[] {
    return (<any>resumeData).awards;
  }

  getCommunity(): Position[] {
    return (<any>resumeData).community;
  }

  constructor() {}
}
