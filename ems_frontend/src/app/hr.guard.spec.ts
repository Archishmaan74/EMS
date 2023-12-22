import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { hrGuard } from './hr.guard';

describe('hrGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => hrGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
