import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { PhotographyPortfolioModule } from './pages/photography-portfolio/photography-portfolio.module';
import { SolarSystemComponent } from './shared/components/solar-system/solar-system.component';

import { LazyLoadImagesDirective } from './directives/lazy-load-images.directive';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LazyLoadImagesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SolarSystemComponent,
    NzMenuModule,
    NzIconModule,
    PhotographyPortfolioModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
