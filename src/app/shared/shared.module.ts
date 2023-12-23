import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageCardComponentComponent } from '../components/image-card-component/image-card-component.component';
import { NzCardModule } from 'ng-zorro-antd/card';


@NgModule({
  declarations: [ImageCardComponentComponent],
  imports: [
    CommonModule,
    NzCardModule
  ],
  exports: [ImageCardComponentComponent]
})
export class SharedModule { }
