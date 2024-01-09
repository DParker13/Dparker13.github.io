import { Component, Input } from '@angular/core';

import { NzImage } from 'ng-zorro-antd/image';

@Component({
  selector: 'app-image-card-component',
  templateUrl: './image-card-component.component.html',
  styleUrls: ['./image-card-component.component.css']
})

export class ImageCardComponentComponent {
  @Input()
  imageDetail: NzImage

  constructor() {
    this.imageDetail = {src: ""}
  }
}
