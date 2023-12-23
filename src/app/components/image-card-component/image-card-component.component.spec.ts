import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCardComponentComponent } from './image-card-component.component';

describe('ImageCardComponentComponent', () => {
  let component: ImageCardComponentComponent;
  let fixture: ComponentFixture<ImageCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageCardComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
