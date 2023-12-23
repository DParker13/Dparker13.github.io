import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingPortfolioComponent } from './coding-portfolio.component';

describe('CodingPortfolioComponent', () => {
  let component: CodingPortfolioComponent;
  let fixture: ComponentFixture<CodingPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodingPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodingPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
