import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotographyPortfolioComponent } from './photography-portfolio.component';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@NgModule({
  declarations: [PhotographyPortfolioComponent],
  imports: [
    CommonModule,
    NzImageModule,
    NzGridModule,
    NzMenuModule
  ]
})
export class PhotographyPortfolioModule { }
