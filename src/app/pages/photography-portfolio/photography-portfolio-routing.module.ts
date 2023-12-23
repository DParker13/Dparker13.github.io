import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotographyPortfolioComponent } from './photography-portfolio.component';

const routes: Routes = [
  { path: '', component: PhotographyPortfolioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotographyPortfolioRoutingModule { }
