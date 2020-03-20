import { TestBed } from '@angular/core/testing';

import { IntraService } from './intra.service';

describe('IntraService', () => {
  let service: IntraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
