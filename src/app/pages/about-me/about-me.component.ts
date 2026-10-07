import { Component } from '@angular/core';

import { MySkills } from '../../shared/interfaces/skills.interface';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.less',
})
export class AboutMeComponent {
  readonly skills: MySkills[] = [
    { label: 'C#', level: 100 },
    { label: 'Java', level: 100 },
    { label: 'Python', level: 100 },
    { label: 'HTML', level: 90 },
    { label: 'SQL Server', level: 90 },
    { label: 'SAFe Agile', level: 90 },
    { label: 'Kanban', level: 90 },
    { label: 'CSS', level: 70 },
    { label: 'TypeScript', level: 70 },
    { label: 'JavaScript', level: 30 },
    { label: 'C++', level: 30 },
  ];
}
