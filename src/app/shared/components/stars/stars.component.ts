// stars.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { NgFor } from '@angular/common';
import { NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stars',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.css'
})
export class StarsComponent implements OnInit, OnDestroy {
  stars: Star[] = [];
  private twinkleSubscription!: Subscription;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Star[]>('assets/documents/stars.json').subscribe({
      next: (data: Star[]) => {
        this.stars = data;
      },
      error: (error: any) => {
        console.error('Error fetching stars data:', error);
      }
    });

    this.twinkleSubscription = interval(20).subscribe(() => {
      this.toggleRandomStar();
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from the interval to avoid memory leaks
    if (this.twinkleSubscription) {
      this.twinkleSubscription.unsubscribe();
    }
  }

  toggleRandomStar(): void {
    const randomIndex = Math.floor(Math.random() * this.stars.length);
    var star: Star = this.stars[randomIndex];

    if (star.blink === undefined) {
      star.blink = false;
    }
    star.blink = !star.blink;
  }
}

interface Star {
  top: string;
  left: string;
  blink?: boolean;
}