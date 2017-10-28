import { Component } from '@angular/core';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:   ['./app.component.scss'],
})
export class AppComponent {
  mediaWatcher: Subscription;
  activeMediaQuery = '';
  navbarMode = 'side';
  opened = false; // set to true to turn on navbar

  constructor(private media: ObservableMedia) {
    this.mediaWatcher = media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      if ( change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        this.toggleNavbarSlideMode();
      } else {
        this.toggleNavbarSideMode();
      }
    });
  }

  toggleNavbarSlideMode() {
    this.navbarMode = 'slide';
    this.opened = false;
  }

  toggleNavbarSideMode() {
    this.navbarMode = 'side';
    this.opened = false; // set to true to turn on navbar
  }
}
