import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodingPortfolioComponent } from './coding-portfolio.component';
import { TranquilityProjectComponent } from './tranquility-project/tranquility-project.component';
import { PolySolaceProjectComponent } from './poly-solace-project/poly-solace-project.component';

const routes: Routes = [
  { path: '', component: CodingPortfolioComponent },
  { path: 'tranquility-project', component: TranquilityProjectComponent },
  { path: 'poly-solace-project', component: PolySolaceProjectComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodingPortfolioRoutingModule { }
