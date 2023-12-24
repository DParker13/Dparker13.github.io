import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageCardComponentComponent } from '../components/image-card-component/image-card-component.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzWaterMarkModule } from 'ng-zorro-antd/water-mark';
import { NzImageModule } from 'ng-zorro-antd/image';

@NgModule({
  declarations: [ImageCardComponentComponent],
  imports: [
    CommonModule,
    NzCardModule,
    NzWaterMarkModule,
    NzImageModule
  ],
  exports: [ImageCardComponentComponent]
})
export class SharedModule { }
