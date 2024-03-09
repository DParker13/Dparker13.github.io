import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { PlanetPageComponent } from '../planet-page/planet-page.component';
import { IPlanetPage } from '../planet-page/planet-page.component';
import { PagesService } from '../../services/pages/pages.service';
import { StarsComponent } from '../stars/stars.component';

@Component({
  selector: 'app-solar-system',
  standalone: true,
  imports: [NgFor, PlanetPageComponent, StarsComponent],
  templateUrl: './solar-system.component.html',
  styleUrl: './solar-system.component.css'
})
export class SolarSystemComponent {
  public planets: IPlanetPage[]

  constructor(public pagesService: PagesService) {
    this.planets = [{color: "#B49175",
                        rotation: 0,
                        size: 9,
                        orbit: 30,
                        lineY: 0.5,
                        route: "/about-me",
                        title: "ABOUT"},
                      {color: "#E6BCBD",
                        rotation: 10,
                        size: 11,
                        orbit: 45,
                        lineY: 0.5,
                        route: "/resume",
                        title: "RESUME"},
                      {color: "#3280B5",
                        rotation: -5,
                        size: 17,
                        orbit: 65,
                        lineY: -0.25,
                        route: "/coding-portfolio",
                        title: "PROGRAMMING PORTFOLIO"},
                      {color: "#C24735",
                        rotation: 5,
                        size: 5,
                        orbit: 80,
                        lineY: 1,
                        route: "/photography-portfolio/1",
                        title: "PHOTOGRAPHY PORTFOLIO"}]
  }
}