import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { arrendadorGuard } from './arrendador.guard';

describe('arrendadorGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => arrendadorGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
