import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSplashScreenComponent } from './angular-splash-screen.component';

describe('AngularSplashScreenComponent', () => {
  let component: AngularSplashScreenComponent;
  let fixture: ComponentFixture<AngularSplashScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularSplashScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSplashScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
