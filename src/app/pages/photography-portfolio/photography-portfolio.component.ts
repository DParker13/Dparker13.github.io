import { Component, OnInit } from '@angular/core';
import { NzImage } from 'ng-zorro-antd/image';

@Component({
  selector: 'app-photography-portfolio',
  templateUrl: './photography-portfolio.component.html',
  styleUrls: ['./photography-portfolio.component.css']
})
export class PhotographyPortfolioComponent implements OnInit {
  images: Array<NzImage>
  
  constructor() {
    this.images = [{src: "/assets/images/drone/boat.jpg"},
    {src: "/assets/images/drone/bridge.jpg"},
    {src: "/assets/images/drone/dock.jpg"},
    {src: "/assets/images/drone/everglades.jpg"},
    {src: "/assets/images/drone/island.jpg"},
    {src: "/assets/images/drone/lake.jpg"},
    {src: "/assets/images/drone/trees.jpg"},
    {src: "/assets/images/drone/trees2.jpg"},
    {src: "/assets/images/drone/trees2.jpg"},
    {src: "/assets/images/drone/trees2.jpg"},
    {src: "/assets/images/drone/trees2.jpg"},
    {src: "/assets/images/drone/trees2.jpg"},
    {src: "/assets/images/drone/trees2.jpg"}];
  }

  ngOnInit(): void {
  }

}
