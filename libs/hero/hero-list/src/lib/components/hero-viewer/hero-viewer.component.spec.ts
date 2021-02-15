import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroViewerComponent } from './hero-viewer.component';

describe('HeroViewerComponent', () => {
  let component: HeroViewerComponent;
  let fixture: ComponentFixture<HeroViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroViewerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
