import { Component, HostListener, Input } from '@angular/core';
import { zIndex } from 'src/app/app.component';
import { trigger, state, style, animate, transition, animateChild, query, group } from '@angular/animations';
import { NavigationEnd, Router } from '@angular/router';
import { filter, from, switchMap, timer } from 'rxjs';
import { PagesService } from '../../services/pages/pages.service';

function generateState(animationState: string) {
  switch (animationState) {
    case 'idle':
      if (window.innerWidth > window.innerHeight) {
        return state('idle', style({ transform: 'translate(-50%, -50%) {{endRotation}}', height: '{{size}}', width: '{{size}}', left: '{{left}}' }), { params: { size: 0, left: 0, endRotation: 0} });
      } else {
        return state('idle', style({ transform: 'translate(-50%, -50%) {{endRotation}}', height: '{{size}}', width: '{{size}}', left: '{{left}}'}), { params: { size: 0, left: 0, endRotation: 0 } });
      }
    case 'hover':
      if (window.innerWidth > window.innerHeight) {
        return state('hover', style({ transform: 'translate(-50%, -50%) {{endRotation}} scale(1.05)', height: '{{size}}', width: '{{size}}', left: '{{left}}' }), { params: { size: 0, left: 0, endRotation: 0 } });
      } else {
        return state('hover', style({ transform: 'translate(-50%, -50%) {{endRotation}} scale(1.05)', height: '{{size}}', width: '{{size}}', left: '{{left}}' }), { params: { size: 0, left: 0, endRotation: 0 } });
      }
    case 'clicked':
      return state('clicked', style({ transform: 'translate(-50%, -50%) {{endRotation}}', height: '{{clickSize}}', width: '{{clickSize}}', left: '50vw' }), { params: { clickSize: '150vw', endRotation: 0 } });
    default:
      return state('idle', style({ transform: 'translate(-50%, -50%) {{endRotation}}', height: '{{size}}', width: '{{size}}' }), { params: { size: 0, endRotation: 0 } });
  }
}

@Component({
  selector: 'app-planet-page',
  standalone: true,
  imports: [],
  templateUrl: './planet-page.component.html',
  styleUrl: './planet-page.component.less',
  animations: [
    trigger('interactAnimation', [
      generateState('idle'),
      generateState('hover'),
      generateState('clicked'),
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
    trigger('rotateAnimation', [
      state('start', style({ transform: 'rotate(-180deg)'})),
      state('end', style({ transform: '{{endRotation}}'}), {params: {endRotation: 'rotate(0deg)'}}),
      transition('start => end',
        group([
          query('@counterRotateAnimation', animateChild()),
          query('@fadeInOut', animateChild()),
          animate('2s {{delay}}s ease-out'),
      ]), {params: {delay: 1}})
    ]),
    trigger('counterRotateAnimation', [
      state('start', style({ transform: 'translate(-50%, -50%) rotate(180deg)'})),
      state('end', style({ transform: 'translate(-50%, -50%) {{endRotation}}'}), {params: {endRotation: 'rotate(0deg)'}}),
      transition('start => end', animate('2s {{delay}}s ease-out'), { params: {delay: 1}})
    ]),
    trigger('fadeInOut', [
      state('start', style({ opacity: 0})),
      state('end', style({ opacity: 1})),
      state('clicked', style({ opacity: 0})),
      transition('start => end', animate('2s {{delay}}s ease-out'), { params: {delay: 1}}),
      transition('end => clicked', animate('0.1s ease-out')),
      transition('clicked => end', animate('1s 2s ease-out'))
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

  clickSize: string = '150vw';
  
  rotationState!: 'start' | 'end';
  animationState: 'idle' | 'hover' | 'clicked' = 'idle';
  titleState: 'start' | 'end' | 'clicked' = 'start';
  orbitZIndex: number = zIndex.orbit;
  shadowZIndex: number = zIndex.shadowPlanet;
  planetZIndex: number = zIndex.backgroundPlanet;

  constructor(private pageService: PagesService, private router: Router) {
    // Convert the hexadecimal string to a number
    const hexNumber: number = parseInt(this.color.substring(1), 16);
  }

  ngOnInit() {
    //Subscribes to page open or close events
    this.pageService.pageState.subscribe((value: 'closed' | 'opened') => {
      this.resetState(value);
    });

    //Subscribes to router change events and will update animation/page states if the routes match
    this.router.events
    .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      if (event.urlAfterRedirects === this.route) {
        this.animationState = 'clicked';
        this.titleState = 'clicked';
        this.pageService.emitPageEvent('opened');
        this.updateZIndex();
        this.rotationState = 'end';
      } else {
        // Delay the change from 'start' to 'end' to ensure animation trigger
        from(timer(0)).pipe(
          switchMap(() => {
            if(this.rotationState != 'end') {
              this.rotationState = 'start';
            }
            return timer(0);
          }),
          switchMap(() => {
            this.rotationState = 'end';
            this.titleState = 'end';
            return timer(0);
          })
        ).subscribe();
      }
    });
  }

  ngAfterViewInit() {

  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.setClickedStateDimensions();
  }

  setClickedStateDimensions(): void {
    // Determine whether height or width is larger and set dimensions accordingly
    if (window.innerHeight > window.innerWidth) {
      this.clickSize = "150vh";
    } else {
      this.clickSize = "150vw";
    }
  }

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

  getOrbit(): string {
    return `${this.orbit*2}vw`;
  }

  getSize(size?: number): string {
    if (size !== undefined) {
      return `${size}vw`;
    } else {
      return `${this.size}vw`;
    }
  }

  alignPlanet(orbit?: number): string {
    if (orbit !== undefined) {
      return `${orbit}vw`;
    } else {
      return `${this.orbit}vw`;
    }
  }

  // Convert the hexadecimal color to RGB format
  hexToRgb(hex: string): string {
    const bigint = parseInt(hex.substring(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
  }

  //Handles animation state and z-index when the planet element is moused over
  mouseOver() {
    if (this.animationState != 'clicked') {
      this.animationState = 'hover';
    }
  }

  //Handles animation state and z-index when the mouse leaves the planet element
  mouseOut() {
    if (this.animationState != 'clicked') {
      this.animationState = 'idle';
    }
  }

  //Handles animation state and z-index when the planet element is clicked
  click() {
    this.animationState = 'clicked';
    this.titleState = 'clicked';
    this.setClickedStateDimensions();
    this.updateZIndex()
    this.router.navigate([this.route]);
    if (this.animationState != 'clicked') {
      this.pageService.emitPageEvent('opened');
    }
  }

  //Updates z-index of this planet to either 1 or 2.
  //When the element is clicked, z-index = 5 so it overlaps the other planets
  updateZIndex() {
    if (this.animationState === 'clicked') {
      this.planetZIndex = zIndex.dominantPlanet; //dominant planet
    } else {
      this.planetZIndex = zIndex.backgroundPlanet; //background planet
    }
  }

  //Reset the state of this planet if page event was 'closed' and this animation state is 'end' (it's zoomed in)
  async resetState(pageState: 'closed' | 'opened') {
    if (this.animationState === 'clicked' && pageState === 'closed') {
      this.animationState = 'idle';
      this.titleState = 'end';

      await new Promise(f => setTimeout(f, 1500)); //1.5s delay
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
}