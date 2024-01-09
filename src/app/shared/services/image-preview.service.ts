import { Injectable } from '@angular/core';

import { NzImage, NzImageService } from 'ng-zorro-antd/image';

@Injectable({
  providedIn: 'root'
})
export class ImagePreviewService {
  public imageDetails: Array<NzImage>

  constructor(private nzImageService: NzImageService) {
    this.imageDetails = [{src: "/assets/images/drone/boat.jpg"},
    {src: "/assets/images/drone/bridge.jpg"},
    {src: "/assets/images/drone/dock.jpg"},
    {src: "/assets/images/drone/everglades.jpg"},
    {src: "/assets/images/drone/island.jpg"},
    {src: "/assets/images/drone/lake.jpg"},
    {src: "/assets/images/drone/trees.jpg"},
    {src: "/assets/images/drone/trees2.jpg"}];
  }
}
