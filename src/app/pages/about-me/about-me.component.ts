import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NzProgressModule } from 'ng-zorro-antd/progress';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NzProgressModule,
            CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.less'
})
export class AboutMeComponent {
  @Input()
  webSkills: Array<MySkills> = [];
  programmingSkills: Array<MySkills> = [];

  constructor() {
    this.webSkills = [{language: "HTML", level: 90},
                      {language: "CSS", level: 70},
                      {language: "Javascript", level: 30}]

    this.programmingSkills = [{language: "C#", level: 100},
                      {language: "Java", level: 100},
                      {language: "Python", level: 100},
                      {language: "SQL Server", level: 100},
                      {language: "C++", level: 30}]
  }
}

export interface MySkills {
  language: string
  level: number
}