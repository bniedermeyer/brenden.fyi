import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'fullpage.js';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(document).ready(function() {
      $('#fullpage').fullpage({
        css3: false,
        fitToSection: true,
        loopHorizontal: true,
        keyboardScrolling: true,
        verticalCentered: true,
        scrollBar: false
      });
    });
  }
}
