import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranquilityProjectComponent } from './tranquility-project.component';

describe('TranquilityProjectComponent', () => {
  let component: TranquilityProjectComponent;
  let fixture: ComponentFixture<TranquilityProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranquilityProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TranquilityProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
