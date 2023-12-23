import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-card-component',
  templateUrl: './image-card-component.component.html',
  styleUrls: ['./image-card-component.component.css']
})

export class ImageCardComponentComponent implements OnInit {
  @Input()
  src: string

  constructor() {
    this.src = ""
  }

  ngOnInit(): void {

  }
}
