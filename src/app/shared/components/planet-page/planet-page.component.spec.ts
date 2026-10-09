import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationEnd, Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Subject } from 'rxjs';

import { PlanetPageComponent } from './planet-page.component';
import { PageEvent, PagesService } from '../../services/pages/pages.service';
import { zIndex } from 'src/app/app.component';

@Component({ template: '<app-planet-page route="/about-me"></app-planet-page>' })
class PlanetHostComponent {}

describe('PlanetPageComponent', () => {
  let component: PlanetPageComponent;
  let fixture: ComponentFixture<PlanetHostComponent>;
  let routerEvents: Subject<NavigationEnd>;
  let pageEvents: EventEmitter<PageEvent>;
  let navigate: jasmine.Spy;

  beforeEach(async () => {
    routerEvents = new Subject<NavigationEnd>();
    pageEvents = new EventEmitter<PageEvent>();
    navigate = jasmine.createSpy('navigate');
    await TestBed.configureTestingModule({
      declarations: [PlanetHostComponent, PlanetPageComponent],
      imports: [CommonModule, NoopAnimationsModule],
      providers: [
        { provide: Router, useValue: { events: routerEvents, navigate } },
        {
          provide: PagesService,
          useValue: {
            pageEvent: pageEvents,
            emitPageEvent: (event: PageEvent) => pageEvents.emit(event),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PlanetHostComponent);
    fixture.detectChanges();
    component = fixture.debugElement.query(By.directive(PlanetPageComponent)).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the delayed entrance', fakeAsync(() => {
    component.ngAfterViewInit();
    tick(200);
    fixture.detectChanges();

    expect(component.rotationState).toBe('on-screen');
    expect(component.titleState).toBe('visible');
    expect(fixture.nativeElement.querySelector('.title').textContent).toContain(component.title);
  }));

  it('skips unchanged planet bindings during parent checks', () => {
    const getScale = spyOn(component, 'getScale').and.callThrough();
    fixture.detectChanges();

    expect(getScale).not.toHaveBeenCalled();
  });

  it('renders route updates and restores the orbit after closing', fakeAsync(() => {
    routerEvents.next(new NavigationEnd(1, '/about-me', '/about-me'));
    fixture.detectChanges();

    const planet: HTMLElement = fixture.nativeElement.querySelector('.planet');
    expect(component.animationState).toBe('clicked');
    expect(planet.style.zIndex).toBe(String(zIndex.dominantPlanet));

    pageEvents.emit({ state: 'closed', color: '#FFFFFF' });
    fixture.detectChanges();
    expect(component.animationState).toBe('idle');
    expect(component.titleState).toBe('visible');

    tick(1500);
    fixture.detectChanges();
    expect(planet.style.zIndex).toBe(String(zIndex.backgroundPlanet));
  }));

  it('navigates when activated with the keyboard', () => {
    const planet: HTMLElement = fixture.nativeElement.querySelector('.planet');
    planet.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));

    expect(navigate).toHaveBeenCalledWith(['/about-me']);
  });
});
