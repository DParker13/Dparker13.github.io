import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, startWith } from 'rxjs';
import { PageEvent, PagesService } from './shared/services/pages/pages.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeAnimation', [
      state('closed', style({ opacity: '0' })),
      state('opened', style({ opacity: '1' })),
      transition('closed => opened', animate('1s 0.75s ease-in-out')),
      transition('opened => closed', animate('1s ease-in-out')),
    ]),
  ],
})
export class AppComponent {
  animationState: 'closed' | 'opened' = 'closed';
  pagesZIndex: number = zIndex.hidden;
  readonly title = signal('');
  @ViewChild('pageContent') private pageContent?: ElementRef<HTMLElement>;

  /**
   * Constructor for initializing the router and pages service.
   *
   * @param {Router} router - the router for navigation
   * @param {PagesService} pagesService$ - the service for managing pages
   */
  constructor(
    private router: Router,
    public pagesService$: PagesService,
  ) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        startWith(null),
        takeUntilDestroyed(),
      )
      .subscribe(() => {
        let route = this.router.routerState.snapshot.root;
        while (route.firstChild) {
          route = route.firstChild;
        }
        this.title.set(route.data['pageTitle'] ?? '');
        this.pageContent?.nativeElement.scrollTo({ top: 0 });
      });

    //Subscribing to page open and close events
    pagesService$.pageEvent.subscribe((event: PageEvent) => {
      this.animationState = event.state;
      this.onPageEvent();
    });
  }

  OnDestroy() {
    if (this.pagesService$.pageEvent) {
      this.pagesService$.pageEvent.unsubscribe();
    }
  }

  /**
   * Emits a page event with the state set to 'closed' and the color set to '#FFFFFF'.
   *
   * @return {void} This function does not return a value.
   */
  async goHome(): Promise<void> {
    this.pagesService$.emitPageEvent({ state: 'closed', color: '#FFFFFF' });
  }

  /**
   * Updates animation state, route, and z-index when page event is triggered
   *
   * @return {void} This function does not return a value.
   */
  async onPageEvent(): Promise<void> {
    if (this.animationState === 'closed') {
      setTimeout(() => {
        this.router.navigate(['/home']);
        this.pagesZIndex = zIndex.hidden; //hides routed page
      }, 1500);
    } else {
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
  pageShowing = 5,
}
