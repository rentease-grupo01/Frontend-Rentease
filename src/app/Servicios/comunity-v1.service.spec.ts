import { TestBed } from '@angular/core/testing';

import { ComunityV1Service } from './comunity-v1.service';

describe('ComunityV1Service', () => {
  let service: ComunityV1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunityV1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
