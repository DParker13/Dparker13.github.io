import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coding-portfolio',
  templateUrl: './coding-portfolio.component.html',
  styleUrls: ['./coding-portfolio.component.css']
})
export class CodingPortfolioComponent implements OnInit {
  images: Array<string>

  constructor() {
    this.images = ["assets/images/tranquility/tranquility2.gif",
    "assets/images/poly_solace/new_menu.gif",
    "assets/images/marbles/marbles1.gif",
    "assets/images/dvd/dvd1.gif",]
  }

  ngOnInit(): void {
  }

}
