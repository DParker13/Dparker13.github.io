import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMenuModule } from 'ng-zorro-antd/menu';

//Components
import { PhotographyPortfolioComponent } from './photography-portfolio.component';

@NgModule({
  declarations: [PhotographyPortfolioComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzImageModule,
    NzGridModule,
    NzMenuModule
  ]
})
export class PhotographyPortfolioModule { }
