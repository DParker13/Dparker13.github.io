import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentViewerComponent } from './pages/document-viewer/document-viewer.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { PhotographyPortfolioComponent } from './pages/photography-portfolio/photography-portfolio.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/about-me' },
  { path: 'about-me', component: AboutMeComponent},
  { path: 'resume', component: DocumentViewerComponent},
  { path: 'photography-portfolio', component: PhotographyPortfolioComponent},
  { path: 'coding-portfolio', loadChildren: () => import('./pages/coding-portfolio/coding-portfolio.module').then(m => m.CodingPortfolioModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
