import { Component, OnInit, Input } from '@angular/core';

import { Position } from '../../shared/position';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
  @Input() positions: Position[];

  constructor() {}

  ngOnInit() {}
}
