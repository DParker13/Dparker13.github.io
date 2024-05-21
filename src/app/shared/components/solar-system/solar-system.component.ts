import { Component, OnInit } from '@angular/core';
import { IPlanetPage } from '../planet-page/planet-page.component';

@Component({
  selector: 'app-solar-system',
  templateUrl: './solar-system.component.html',
  styleUrl: './solar-system.component.css'
})
export class SolarSystemComponent implements OnInit {
  public planets: IPlanetPage[];
  public maxSize: number = 0;

  /**
   * Constructor for the class.
   * Sets up the planets array with their properties.
   * Each planet object in the array has the following properties:
   * - color: string representing the color of the planet.
   * - rotation: number representing the rotation angle of the planet.
   * - size: number representing the size of the planet.
   * - orbit: number representing the orbit radius of the planet.
   * - lineY: number representing the Y-coordinate of the line.
   * - route: string representing the route of the planet.
   * - title: string representing the title of the planet.
   * - landSrc: string representing the source of the land image.
   * - cloudSrc: string representing the source of the cloud image.
   * - showClouds: boolean representing whether to show clouds or not.
   */
  constructor() {
    // Set up planets
    this.planets = [{color: "#84440F",
                        rotation: 0,
                        size: 9,
                        orbit: 30,
                        lineY: 0.5,
                        route: "/about-me",
                        title: "About",
                        landSrc: "../../../../assets/images/planets/mars/mars-land.svg",
                        cloudSrc: "../../../../assets/images/planets/mars/mars-clouds.svg",
                        showClouds: false},
                      {color: "#F9952A",
                        rotation: 10,
                        size: 11,
                        orbit: 45,
                        lineY: 0.5,
                        route: "/resume",
                        title: "resuMe",
                        landSrc: "../../../../assets/images/planets/mars/mars-land.svg",
                        cloudSrc: "../../../../assets/images/planets/mars/mars-clouds.svg",
                        showClouds: false},
                      {color: "#3280B5",
                        rotation: -5,
                        size: 17,
                        orbit: 65,
                        lineY: -0.25,
                        route: "/coding-portfolio",
                        title: "proGrAmminG portfolio",
                        landSrc: "../../../../assets/images/planets/earth/earth-land.svg",
                        cloudSrc: "../../../../assets/images/planets/earth/earth-clouds.svg",
                        showClouds: true},
                      {color: "#CE1B00",
                        rotation: 5,
                        size: 5,
                        orbit: 80,
                        lineY: 1,
                        route: "/photography-portfolio/1",
                        title: "photoGrAphy portfolio",
                        landSrc: "../../../../assets/images/planets/mars/mars-land.svg",
                        cloudSrc: "../../../../assets/images/planets/mars/mars-clouds.svg",
                        showClouds: false}]
  }

  ngOnInit() {
    this.maxSize = Math.max(...this.planets.map(planet => planet.size));
  }
}