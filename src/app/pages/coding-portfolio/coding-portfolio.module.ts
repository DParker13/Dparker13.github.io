import { CodingPortfolioComponent } from './coding-portfolio.component';
import { TranquilityProjectComponent } from './tranquility-project/tranquility-project.component';
import { PolySolaceProjectComponent } from './poly-solace-project/poly-solace-project.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodingPortfolioRoutingModule } from './coding-portfolio-routing.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    CodingPortfolioComponent,
    TranquilityProjectComponent,
    PolySolaceProjectComponent
  ],
  imports: [
    CommonModule,
    CodingPortfolioRoutingModule,
    NzGridModule,
    SharedModule,
    NzIconModule
  ]
})
export class CodingPortfolioModule { }
