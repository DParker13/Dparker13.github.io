import { Component } from '@angular/core';
import { NzProgressModule } from 'ng-zorro-antd/progress';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NzProgressModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
