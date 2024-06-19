import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { inquilinoGuard } from './inquilino.guard';

describe('inquilinoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => inquilinoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
