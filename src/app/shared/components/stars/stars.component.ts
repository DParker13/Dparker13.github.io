// stars.component.ts
import { Component, ElementRef, OnInit, OnDestroy, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.css'
})
export class StarsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('starsCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  
  private stars: Star[] = [];
  private context!: CanvasRenderingContext2D;
  private starFile$!: Subscription;
  private animationFrame: number = 0;
  private twinkle$!: Subscription;

  // Track window dimensions
  private width: number = 0;
  private height: number = 0;

  constructor(private http: HttpClient) { }

  @HostListener('window:resize')
  onResize() {
    this.setCanvasSize();
    this.drawStars();
  }

  ngOnInit(): void {
    this.starFile$ = this.http.get<Star[]>('assets/documents/stars.json')
      .subscribe(stars => {
        this.stars = stars;
        this.drawStars();
        
        // Set up occasional twinkling for random stars
        this.twinkle$ = interval(800).subscribe(() => {
          // Make ~5% of stars twinkle by changing their opacity
          this.stars.forEach(star => {
            if (Math.random() < 0.05) {
              star.opacity = Math.random() * 0.5 + 0.5; // Random opacity between 0.5 and 1
            } else {
              star.opacity = 1.0;
            }
          });
          this.drawStars();
        });
      });
  }

  ngAfterViewInit(): void {
    this.context = this.canvasRef.nativeElement.getContext('2d')!;
    this.setCanvasSize();
  }

  private setCanvasSize(): void {
    if (!this.canvasRef) return;
    
    const canvas = this.canvasRef.nativeElement;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    
    // Set the canvas dimensions to match the window
    canvas.width = this.width;
    canvas.height = this.height;
    
    // Set canvas CSS properties to ensure full coverage
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1'; // Behind other content
  }

  private drawStars(): void {
    if (!this.context || !this.stars.length) return;
    
    // Clear the canvas
    this.context.clearRect(0, 0, this.width, this.height);
    
    // Draw each star
    this.stars.forEach(star => {
      this.context.beginPath();
      
      // Convert percentage to pixel positions
      const x = this.width * parseFloat(star.left) / 100;
      const y = this.height * parseFloat(star.top) / 100;
      
      // Create a radial gradient for a glowing effect
      const radius = Math.random() < 0.1 ? 1.5 : 1; // Some stars slightly larger
      const gradient = this.context.createRadialGradient(x, y, 0, x, y, radius);
      
      // Set opacity based on twinkle effect
      const opacity = star.opacity || 1.0;
      
      // Create a glowing effect with gradient
      gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      this.context.fillStyle = gradient;
      this.context.arc(x, y, radius, 0, Math.PI * 2);
      this.context.fill();
    });
  }

  ngOnDestroy(): void {
    if (this.starFile$) {
      this.starFile$.unsubscribe();
    }

    if (this.twinkle$) {
      this.twinkle$.unsubscribe();
    }

    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }
}

interface Star {
  top: string;
  left: string;
  blink?: boolean;
  opacity?: number;
}