import { TestBed } from '@angular/core/testing';

import { EnrollloginService } from './enrolllogin.service';

describe('EnrollloginService', () => {
  let service: EnrollloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrollloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
