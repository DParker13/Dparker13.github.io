import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhotographyPortfolioModule } from './pages/photography-portfolio/photography-portfolio.module';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

//Nz Modules
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzProgressModule } from 'ng-zorro-antd/progress';

//Components
import { AppComponent } from './app.component';
import { SolarSystemComponent } from './shared/components/solar-system/solar-system.component';
import { PlanetPageComponent } from './shared/components/planet-page/planet-page.component';
import { StarsComponent } from './shared/components/stars/stars.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';

//Directives
import { LazyLoadImagesDirective } from './directives/lazy-load-images.directive';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LazyLoadImagesDirective,
    SolarSystemComponent,
    PlanetPageComponent,
    StarsComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PhotographyPortfolioModule,
    NzMenuModule,
    NzIconModule,
    NzProgressModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
