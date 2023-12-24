import { Component, OnInit } from '@angular/core';
import { NzImage } from 'ng-zorro-antd/image';

@Component({
  selector: 'app-coding-portfolio',
  templateUrl: './coding-portfolio.component.html',
  styleUrls: ['./coding-portfolio.component.css']
})
export class CodingPortfolioComponent implements OnInit {
  images: Array<NzImage>

  constructor() {
    this.images = [{src: "assets/images/tranquility/tranquility2.gif"},
    {src: "assets/images/poly_solace/new_menu.gif"},
    {src: "assets/images/marbles/marbles1.gif"},
    {src: "assets/images/dvd/dvd1.gif"}]
  }

  ngOnInit(): void {
  }

}
