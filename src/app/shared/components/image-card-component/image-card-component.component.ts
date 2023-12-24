import { Component, Input } from '@angular/core';

import { NzImage, NzImageService } from 'ng-zorro-antd/image';

@Component({
  selector: 'app-image-card-component',
  templateUrl: './image-card-component.component.html',
  styleUrls: ['./image-card-component.component.css']
})

export class ImageCardComponentComponent {
  @Input()
  imageDetails: NzImage

  constructor(private nzImageService: NzImageService) {
    this.imageDetails = {src: ""}
  }
  
  onClick(): void {      
    this.nzImageService.preview([this.imageDetails], { nzZoom: 1, nzRotate: 0 });
  }
}
