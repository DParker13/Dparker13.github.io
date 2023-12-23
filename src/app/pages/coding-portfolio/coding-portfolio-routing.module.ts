import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodingPortfolioComponent } from './coding-portfolio.component';

const routes: Routes = [
  { path: '', component: CodingPortfolioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodingPortfolioRoutingModule { }
