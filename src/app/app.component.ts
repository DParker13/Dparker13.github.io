import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PagesService } from './shared/services/pages/pages.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [
    trigger('fadeAnimation', [
    state('closed', style({ opacity: '0' })),
    state('opened', style({ opacity: '1' })),
    transition('closed => opened', animate('1s 0.75s ease-in-out')),
    transition('opened => closed', animate('1s ease-in-out'))
    ])
  ]
})
export class AppComponent {
  animationState: 'closed' | 'opened' = 'closed';
  pagesZIndex: number = zIndex.hidden;

  constructor(private router: Router, public pagesService: PagesService) {
    //Subscribing to page open and close events
    pagesService.pageState.subscribe((value: 'closed' | 'opened') => {
      this.animationState = value;
      this.pageEvent()
    })
  }

  async pageEvent() {
    if (this.animationState === 'closed') {
      await new Promise(f => setTimeout(f, 1500)); //1.5s delay
      this.router.navigate(['/home']);
      this.pagesZIndex = zIndex.hidden; //hides routed page
    }
    else {
      this.pagesZIndex = zIndex.pageShowing; //Moves routed page to front
    }
  }
}

export enum zIndex {
  hidden = -1,
  background = 0,
  orbit = 1,
  shadowPlanet = 2,
  backgroundPlanet = 3,
  dominantPlanet = 4,
  pageShowing = 5
}