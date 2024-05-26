// stars.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.css'
})
export class StarsComponent implements OnInit, OnDestroy {
  stars: Star[] = [];

  private starFile$!: Subscription;
  private twinkle$!: Subscription;

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

    /*
    this.twinkle$ = interval(20).subscribe(() => {
      this.toggleRandomStar();
    });
    */
  }

  ngOnDestroy(): void {
    if (this.starFile$) {
      this.starFile$.unsubscribe();
    }

    // Unsubscribe from the interval to avoid memory leaks
    if (this.twinkle$) {
      this.twinkle$.unsubscribe();
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