// stars.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.css'
})
export class StarsComponent implements OnInit, OnDestroy {
  stars$!: Observable<Star[]>;

  private starFile$!: Subscription;
  private twinkle$!: Subscription;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.stars$ = this.http.get<Star[]>('assets/documents/stars.json')
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
}

interface Star {
  top: string;
  left: string;
  blink?: boolean;
}