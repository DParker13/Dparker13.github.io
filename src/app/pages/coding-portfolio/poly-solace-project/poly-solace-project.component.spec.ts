import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolySolaceProjectComponent } from './poly-solace-project.component';

describe('PolySolaceProjectComponent', () => {
  let component: PolySolaceProjectComponent;
  let fixture: ComponentFixture<PolySolaceProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolySolaceProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PolySolaceProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
