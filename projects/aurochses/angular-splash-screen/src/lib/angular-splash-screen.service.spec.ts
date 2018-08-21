import { TestBed, inject } from '@angular/core/testing';

import { AngularSplashScreenService } from './angular-splash-screen.service';

describe('AngularSplashScreenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularSplashScreenService]
    });
  });

  it('should be created', inject([AngularSplashScreenService], (service: AngularSplashScreenService) => {
    expect(service).toBeTruthy();
  }));
});
