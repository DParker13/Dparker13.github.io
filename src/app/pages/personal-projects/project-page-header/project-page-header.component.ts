import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-page-header',
  templateUrl: './project-page-header.component.html',
  styleUrls: ['./project-page-header.component.less'],
})
export class ProjectPageHeaderComponent {
  @Input({ required: true }) title = '';
}
