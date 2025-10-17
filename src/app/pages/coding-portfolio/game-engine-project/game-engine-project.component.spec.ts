import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameEngineProjectComponent } from './game-engine-project.component';

describe('GameEngineProject', () => {
  let component: GameEngineProjectComponent;
  let fixture: ComponentFixture<GameEngineProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameEngineProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameEngineProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
