import { PersonalProjectsComponent } from './personal-projects.component';
import { TranquilityProjectComponent } from './pages/tranquility-project/tranquility-project.component';
import { TranquilityDevLogComponent } from './pages/tranquility-dev-log/tranquility-dev-log.component';
import { PolySolaceProjectComponent } from './pages/poly-solace-project/poly-solace-project.component';
import { PolySolaceDevLogComponent } from './pages/poly-solace-dev-log/poly-solace-dev-log.component';
import { GameEngineProjectComponent } from './pages/game-engine-project/game-engine-project.component';
import { ProjectPageHeaderComponent } from './project-page-header/project-page-header.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PersonalProjectsRoutingModule } from './personal-projects-routing.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    PersonalProjectsComponent,
    TranquilityProjectComponent,
    TranquilityDevLogComponent,
    PolySolaceProjectComponent,
    PolySolaceDevLogComponent,
    GameEngineProjectComponent,
    ProjectPageHeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PersonalProjectsRoutingModule,
    NzGridModule,
    SharedModule,
    NzIconModule,
  ],
})
export class PersonalProjectsModule {}
