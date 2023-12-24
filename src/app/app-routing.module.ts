import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentViewerComponent } from './pages/document-viewer/document-viewer.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/coding-portfolio' },
  { path: 'photography-portfolio', loadChildren: () => import('./pages/photography-portfolio/photography-portfolio.module').then(m => m.PhotographyPortfolioModule) },
  { path: 'coding-portfolio', loadChildren: () => import('./pages/coding-portfolio/coding-portfolio.module').then(m => m.CodingPortfolioModule) },
  { path: 'resume', component: DocumentViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
