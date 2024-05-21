import { NgModule } from '@angular/core';

//Components
import { ImageCardComponentComponent } from '../components/image-card-component/image-card-component.component';

//Modules
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzWaterMarkModule } from 'ng-zorro-antd/water-mark';
import { NzImageModule } from 'ng-zorro-antd/image';

@NgModule({
  declarations: [ImageCardComponentComponent],
  imports: [
    NzCardModule,
    NzWaterMarkModule,
    NzImageModule
  ],
  exports: [ImageCardComponentComponent]
})
export class SharedModule { }
