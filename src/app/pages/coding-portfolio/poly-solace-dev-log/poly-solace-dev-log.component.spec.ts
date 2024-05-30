import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolySolaceDevLogComponent } from './poly-solace-dev-log.component';

describe('PolySolaceDevLogComponent', () => {
  let component: PolySolaceDevLogComponent;
  let fixture: ComponentFixture<PolySolaceDevLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolySolaceDevLogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PolySolaceDevLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
