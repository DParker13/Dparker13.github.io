import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollItemComponent } from './scroll-item.component';

describe('ScrollItemComponent', () => {
  let component: ScrollItemComponent;
  let fixture: ComponentFixture<ScrollItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
