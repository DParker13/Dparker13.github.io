import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodingPortfolioComponent } from './coding-portfolio.component';
import { TranquilityProjectComponent } from './tranquility-project/tranquility-project.component';
import { TranquilityDevLogComponent } from './tranquility-dev-log/tranquility-dev-log.component';
import { PolySolaceProjectComponent } from './poly-solace-project/poly-solace-project.component';
import { PolySolaceDevLogComponent } from './poly-solace-dev-log/poly-solace-dev-log.component';
import { GameEngineProjectComponent } from './game-engine-project/game-engine-project.component';

const routes: Routes = [
  { path: '', component: CodingPortfolioComponent },
  { path: 'tranquility-project', component: TranquilityProjectComponent},
  { path: 'tranquility-project/dev-log', component: TranquilityDevLogComponent},
  { path: 'poly-solace-project', component: PolySolaceProjectComponent},
  { path: 'poly-solace-project/dev-log', component: PolySolaceDevLogComponent},
  { path: 'game-engine-project', component: GameEngineProjectComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodingPortfolioRoutingModule { }
