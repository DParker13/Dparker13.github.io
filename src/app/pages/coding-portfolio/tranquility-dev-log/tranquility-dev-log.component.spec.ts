import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranquilityDevLogComponent } from './tranquility-dev-log.component';

describe('TranquilityDevLogComponent', () => {
  let component: TranquilityDevLogComponent;
  let fixture: ComponentFixture<TranquilityDevLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranquilityDevLogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TranquilityDevLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
