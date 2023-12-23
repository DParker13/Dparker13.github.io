import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photography-portfolio',
  templateUrl: './photography-portfolio.component.html',
  styleUrls: ['./photography-portfolio.component.css']
})
export class PhotographyPortfolioComponent implements OnInit {
  images: Array<string>
  
  constructor() {
    this.images = ["/assets/images/drone/boat.jpg",
    "/assets/images/drone/bridge.jpg",
    "/assets/images/drone/dock.jpg",
    "/assets/images/drone/everglades.jpg",
    "/assets/images/drone/island.jpg",
    "/assets/images/drone/lake.jpg",
    "/assets/images/drone/trees.jpg",
    "/assets/images/drone/trees2.jpg"];
  }

  ngOnInit(): void {
  }

}
