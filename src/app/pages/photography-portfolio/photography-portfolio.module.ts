import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotographyPortfolioRoutingModule } from './photography-portfolio-routing.module';
import { PhotographyPortfolioComponent } from './photography-portfolio.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SharedModule } from 'src/app/shared/modules/shared.module';

@NgModule({
  declarations: [
    PhotographyPortfolioComponent
  ],
  imports: [
    CommonModule,
    PhotographyPortfolioRoutingModule,
    NzGridModule,
    SharedModule
  ]
})
export class PhotographyPortfolioModule { }
