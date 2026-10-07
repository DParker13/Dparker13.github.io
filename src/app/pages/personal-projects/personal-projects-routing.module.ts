import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalProjectsComponent } from './personal-projects.component';
import { TranquilityProjectComponent } from './pages/tranquility-project/tranquility-project.component';
import { TranquilityDevLogComponent } from './pages/tranquility-dev-log/tranquility-dev-log.component';
import { PolySolaceProjectComponent } from './pages/poly-solace-project/poly-solace-project.component';
import { PolySolaceDevLogComponent } from './pages/poly-solace-dev-log/poly-solace-dev-log.component';
import { GameEngineProjectComponent } from './pages/game-engine-project/game-engine-project.component';

const routes: Routes = [
  { path: '', component: PersonalProjectsComponent, data: { pageTitle: 'Personal Projects' } },
  {
    path: 'tranquility-project',
    component: TranquilityProjectComponent,
    data: { pageTitle: 'Personal Projects' },
  },
  {
    path: 'tranquility-project/dev-log',
    component: TranquilityDevLogComponent,
    data: { pageTitle: 'Personal Projects' },
  },
  {
    path: 'poly-solace-project',
    component: PolySolaceProjectComponent,
    data: { pageTitle: 'Personal Projects' },
  },
  {
    path: 'poly-solace-project/dev-log',
    component: PolySolaceDevLogComponent,
    data: { pageTitle: 'Personal Projects' },
  },
  {
    path: 'game-engine-project',
    component: GameEngineProjectComponent,
    data: { pageTitle: 'Personal Projects' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalProjectsRoutingModule {}
