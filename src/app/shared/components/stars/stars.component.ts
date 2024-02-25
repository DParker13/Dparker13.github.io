// stars.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { NgFor } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-stars',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.css'
})
export class StarsComponent implements OnInit, OnDestroy {
  stars: Star[] = [];
  private intervalSubscription!: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.generateStars();

    this.intervalSubscription = interval(20).subscribe(() => {
      this.toggleRandomStar();
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from the interval to avoid memory leaks
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  generateStars(): void {
    const numberOfStars = 200;
    for (let i = 0; i < numberOfStars; i++) {
      this.stars.push({
        top: Math.random() * 100 + '%',
        left: Math.random() * 100 + '%'
      });
    }
  }

  toggleRandomStar(): void {
    const randomIndex = Math.floor(Math.random() * this.stars.length);
    this.stars[randomIndex].blink = !this.stars[randomIndex].blink;
  }
}

interface Star {
  top: string;
  left: string;
  blink?: boolean;
}