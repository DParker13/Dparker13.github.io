import { Component, OnInit } from '@angular/core';
import { NzImage } from 'ng-zorro-antd/image';

@Component({
  selector: 'app-coding-portfolio',
  templateUrl: './coding-portfolio.component.html',
  styleUrls: ['./coding-portfolio.component.css']
})
export class CodingPortfolioComponent implements OnInit {
  projects: Array<MyProjects>

  constructor() {
    this.projects = [{image: {src: "assets/images/tranquility/tranquility2.gif"}, name: "Tranquility", description: "2D Procedurally Generated Survival Game"},
    {image: {src: "assets/images/poly_solace/new_menu.gif"}, name: "Poly Solace", description: "3D Procedurally Generated Survival Game"}]
  }

  ngOnInit(): void {
  }

}

export interface MyProjects {
  image: NzImage
  name: string
  description: string
}