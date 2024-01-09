import { trigger, state, transition, animate, style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll-container',
  standalone: true,
  imports: [],
  templateUrl: './scroll-container.component.html',
  styleUrl: './scroll-container.component.css',
  animations: [
    trigger('balloonEffect', [
      state('start', style({
        backgroundColor: 'green',
        transform: 'scale(1)'
      })),
      state('end', style({
        backgroundColor: 'red',
        transform: 'scale(1.5)'
      })),
      transition('end=>start', animate('1000ms')),
      transition('start=>end', animate('1500ms'))
    ]),
  ]
})
export class ScrollContainerComponent {
  private element?: document.getElementById("scroll-container")
  public topPos: this.element.offsetTop;
  public bottomPos = this.topPos + this.element?.offsetHeight;

  constructor() {
    this.topPos = 0;
    this.bottomPos = 0;
  }
}
