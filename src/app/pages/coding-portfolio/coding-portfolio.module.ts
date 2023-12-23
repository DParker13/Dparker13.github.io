import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodingPortfolioRoutingModule } from './coding-portfolio-routing.module';
import { CodingPortfolioComponent } from './coding-portfolio.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CodingPortfolioComponent
  ],
  imports: [
    CommonModule,
    CodingPortfolioRoutingModule,
    NzGridModule,
    SharedModule
  ]
})
export class CodingPortfolioModule { }
