import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographyPortfolioComponent } from './photography-portfolio.component';

describe('PhotographyPortfolioComponent', () => {
  let component: PhotographyPortfolioComponent;
  let fixture: ComponentFixture<PhotographyPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotographyPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotographyPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
