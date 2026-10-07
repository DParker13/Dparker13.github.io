import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentViewerComponent } from './pages/document-viewer/document-viewer.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { PhotographyPortfolioComponent } from './pages/photography-portfolio/photography-portfolio.component';
import { EmptyComponent } from './shared/components/empty/empty.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: EmptyComponent },
  { path: 'about-me', component: AboutMeComponent, data: { pageTitle: 'About Me' } },
  { path: 'resume', component: DocumentViewerComponent, data: { pageTitle: 'Resume' } },
  { path: 'photography-portfolio', pathMatch: 'full', redirectTo: '/photography-portfolio/1' },
  {
    path: 'photography-portfolio/:portfolioID',
    component: PhotographyPortfolioComponent,
    data: { pageTitle: 'Photography Portfolio' },
  },
  {
    path: 'personal-projects',
    loadChildren: () =>
      import('./pages/personal-projects/personal-projects.module').then(
        (m) => m.PersonalProjectsModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
