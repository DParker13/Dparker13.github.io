import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetPageComponent } from './planet-page.component';

describe('PlanetPageComponent', () => {
  let component: PlanetPageComponent;
  let fixture: ComponentFixture<PlanetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
