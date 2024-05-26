import { Component, HostListener, Input } from '@angular/core';
import { zIndex } from 'src/app/app.component';
import { trigger, state, style, animate, transition, animateChild, query, group } from '@angular/animations';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter, from, switchMap, timer } from 'rxjs';
import { PageEvent, PagesService } from '../../services/pages/pages.service';

function interactState(animationState: string) {
  switch (animationState) {
    case 'idle':
      return state('idle', style({transform: 'translate(-50%, -50%) {{endRotation}}', left: '{{left}}' }), { params: {left: 0, endRotation: 0} });
    case 'hover':
      return state('hover', style({transform: 'translate(-50%, -50%) {{endRotation}} scale(1.05)', left: '{{left}}' }), { params: {left: 0, endRotation: 0 } });
    case 'clicked':
      return state('clicked', style({transform: 'translate(-50%, -50%) {{endRotation}} scale({{scale}})', left: '50vw' }), {params: {scale: 10, endRotation: 0 } });
    default:
      return state('idle', style({transform: 'translate(-50%, -50%) {{endRotation}}' }), { params: { endRotation: 0 } });
  }
}

@Component({
  selector: 'app-planet-page',
  templateUrl: './planet-page.component.html',
  styleUrl: './planet-page.component.less',
  animations: [
    trigger('interact', [
      interactState('idle'),
      interactState('hover'),
      interactState('clicked'),
      transition('idle <=> hover', animate('0.75s cubic-bezier(0, 0.2, 0.256, 1.55)')),
      transition('hover => clicked',
        group([
          animate('1.5s ease-in-out'),
          query('@fadeInOut', animateChild()),
      ])),
      transition('clicked => idle', group([
        animate('1.5s ease-in-out'),
        query('@fadeInOut', animateChild()),
      ]))
    ]),
    trigger('rotation', [
      state('off-screen', style({transform: 'rotate(-180deg)'})),
      state('on-screen', style({transform: '{{endRotation}}'}), {params: {endRotation: 'rotate(0deg)'}}),
      transition('off-screen => on-screen', [
        group([
          query('@fadeInOut', animateChild()),
          animate('2s {{delay}}s ease-out')
        ])
      ], {params: {delay: 1}})
    ]),
    trigger('fadeInOut', [
      state('invisible', style({ opacity: 0})),
      state('visible', style({ opacity: 1})),
      transition('invisible => visible', animate('2s {{delay}}s ease-out'), { params: {delay: 1}}),
      transition('visible => invisible', animate('0.25s ease-out'))
    ]),
  ]
})
export class PlanetPageComponent implements IPlanetPage {
  @Input() color: string = "#FFFFFF";
  @Input() size: number = 10;
  @Input() orbit: number = 50;
  @Input() lineY: number = 0.5;
  @Input() rotation: number = 0;
  @Input() rotationDelay: number = 1;
  @Input() route: string = '/';
  @Input() title: string = 'Default';
  @Input() landSrc?: string = '../../../../assets/planets/images/earth/earth-land.svg';
  @Input() cloudSrc?: string = '../../../../assets/planets/images/earth/earth-clouds.svg';
  @Input() showClouds: boolean = true;
  
  pageRouter$!: Subscription;
  pageEvent$!: Subscription;

  rotationState!: 'off-screen' | 'on-screen';
  animationState: 'idle' | 'hover' | 'clicked' = 'idle';
  titleState: 'invisible' | 'visible' = 'invisible';
  orbitZIndex: number = zIndex.orbit;
  shadowZIndex: number = zIndex.shadowPlanet;
  planetZIndex: number = zIndex.backgroundPlanet;

  constructor(private pageService: PagesService, private router: Router) {
    // Convert the hexadecimal string to a number
    const hexNumber: number = parseInt(this.color.substring(1), 16);
  }

  ngOnInit() {
    //Subscribes to page open or close events
    this.pageEvent$ = this.pageService.pageEvent.subscribe((event: PageEvent) => {
      this.resetState(event.state);
    });

    //Subscribes to router change events and will update animation/page states if the routes match
    this.pageRouter$ = this.router.events
    .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      var url = event.urlAfterRedirects;

      if (url.includes(this.route)) {
        this.animationState = 'clicked';
        this.titleState = 'invisible';
        this.pageService.emitPageEvent({state: 'opened', color: this.color} as PageEvent);
        this.updateZIndex();
        this.rotationState = 'on-screen';
      } else {
        // Delay the change from 'start' to 'end' to ensure animation trigger
        from(timer(0)).pipe(
          switchMap(() => {
            if(this.rotationState != 'on-screen') {
              this.rotationState = 'off-screen';
            }
            return timer(0);
          }),
          switchMap(() => {
            this.animationState = 'idle';
            this.rotationState = 'on-screen';
            this.titleState = 'visible';
            return timer(0);
          })
        ).subscribe();
      }
    });
  }

  ngOnDestroy() {
    if (this.pageEvent$) {
      this.pageEvent$.unsubscribe();
    }

    if (this.pageRouter$) {
      this.pageRouter$.unsubscribe();
    }
  }

  /**
   * Determine the rotation of the planet
   * 
   * @param isNegative true if the planet should rotate in the opposite direction, false otherwise
   * @param rotation the angle to rotate the planet to, if provided
   * @returns the rotation to apply to the planet
   */
  getRotation(isNegative: boolean, rotation?: number): string {
    var rot: number = this.rotation
    
    if (rotation !== undefined) {
      rot = rotation
    }

    if(isNegative) {
      return `rotate(${rot * -1}deg)`;
    } else {
      return `rotate(${rot}deg)`;
    }
  }

  //Calculates the scale of the planet to be two times the size of the screen
  getScale(): number {
    return 200 / this.size;
  }

  /**
   * Determine the orbit of the planet
   * 
   * @returns the orbit to apply to the planet, in vw units
   */
  getOrbit(): string {
    return `${this.orbit*2}vw`;
  }

  // Format size in vw
  getSize(size?: number): string {
    if (size !== undefined) {
      return `${size}vw`;
    } else {
      return `${this.size}vw`;
    }
  }

  /**
   * Determine the alignment of the planet (sets the left position of the planet)
   * 
   * @param orbit the orbit to use, if provided
   * @returns the left position of the planet, in vw units
   */
  alignPlanet(orbit?: number): string {
    if (orbit !== undefined) {
      return `${orbit}vw`;
    } else {
      return `${this.orbit}vw`;
    }
  }

  /**
   * Converts a hexadecimal color to an RGB color format.
   * @param hex The hexadecimal color string (starting with '#')
   * @returns The RGB color format string (e.g. 'rgb(255, 0, 0)')
   */
  hexToRgb(hex: string): string {
    // Convert hex to a base-10 integer
    const bigint = parseInt(hex.substring(1), 16);

    // Extract the R, G, and B channel values from the integer
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    // Return the RGB format string
    return `rgb(${r}, ${g}, ${b})`;
  }

  /**
   * Handles animation state and z-index when the planet element is moused over
   */
  mouseOver() {
    // If the animation state is not already clicked, change it to hover
    if (this.animationState !== 'clicked') {
      this.animationState = 'hover';
    }
  }

  /**
   * Handles animation state and z-index when the mouse leaves the planet element
   * Resets the animation state to 'idle' if it has not been changed to 'clicked'
   */
  mouseOut() {
    if (this.animationState !== 'clicked') {
      this.animationState = 'idle'; // Reset animation state to 'idle'
    }
  }

  /**
   * Handles animation state and z-index when the planet element is clicked
   * Sets animation state to 'clicked', title state to 'visible',
   * changes dimensions of planet to clicked state dimensions,
   * updates z-index to 3 or 4, and navigates to the planet's route
   */
  click() {
    this.animationState = 'clicked';
    this.titleState = 'visible';
    this.updateZIndex(); // Update z-index to either 3 or 4
    this.router.navigate([this.route]); // Navigate to the planet's route
  }

  /**
   * Updates z-index of this planet
   * The z-index of a planet is either 3 or 4
   * When the planet is clicked, it will have a z-index of 5 to overlap the other planets
   */
  updateZIndex() {
    if (this.animationState === 'clicked') {
      this.planetZIndex = zIndex.dominantPlanet; // dominant planet (index 4)
    } else {
      this.planetZIndex = zIndex.backgroundPlanet; // background planet (index 3)
    }
  }

  /**
   * Resets the state of this planet
   * If page event was 'closed' and this animation state is 'end' (it's zoomed in),
   * reset animation state to 'idle', title state to 'visible',
   * update z-index after 1.5s delay, and set dimensions to idle state dimensions
   * @param pageState the page event (closed or opened)
   */
  async resetState(pageState: 'closed' | 'opened') {
    if (this.animationState === 'clicked' && pageState === 'closed') {
      this.animationState = 'idle';
      this.titleState = 'visible';

      await new Promise(f => setTimeout(f, 1500)); // 1.5s delay
      this.updateZIndex();
    }
  }
}

export interface IPlanetPage {
  color: string;
  size: number;
  orbit: number;
  lineY: number;
  rotation: number;
  route: string;
  title: string;
  landSrc?: string;
  cloudSrc?: string;
  showClouds: boolean;
}