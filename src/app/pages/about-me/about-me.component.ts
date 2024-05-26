import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.less'
})
export class AboutMeComponent {
  webSkills: Array<MySkills>;
  programmingSkills: Array<MySkills>;
  frameworkSkills: Array<MySkills>;

  constructor() {
    this.webSkills = [{language: "HTML", level: 90},
                      {language: "CSS", level: 70},
                      {language: "Javascript", level: 30},
                      {language: "TypeScript", level: 70}]

    this.programmingSkills = [{language: "C#", level: 100},
                      {language: "Java", level: 100},
                      {language: "Python", level: 100},
                      {language: "SQL Server", level: 90},
                      {language: "C++", level: 30}]

    this.frameworkSkills = [{language: "SAFe Agile", level: 90},
                      {language: "Kanban", level: 90}]
  }
}

export interface MySkills {
  language: string
  level: number
}