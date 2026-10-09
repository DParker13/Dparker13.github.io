import { Component } from '@angular/core';
import { NzImage } from 'ng-zorro-antd/image';

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.less'],
})
export class PersonalProjectsComponent {
  projects: Array<MyProjects>;

  constructor() {
    this.projects = [
      {
        image: { src: 'assets/images/game_engine/engine_example_1.webp' },
        name: 'Game Engine',
        description: 'Custom Game Engine built using SDL3 in C++',
        route: 'game-engine-project',
      },
      {
        image: { src: 'assets/images/tranquility/tranquility2.webp' },
        name: 'Tranquility',
        description: '2D Procedurally Generated Survival Game',
        route: 'tranquility-project',
      },
      {
        image: { src: 'assets/images/poly_solace/new_menu.webp' },
        name: 'Poly Solace',
        description: '3D Procedurally Generated Survival Game',
        route: 'poly-solace-project',
      },
    ];
  }
}

export interface MyProjects {
  image: NzImage;
  name: string;
  description: string;
  route: string;
}
