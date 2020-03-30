import { TestBed } from '@angular/core/testing';

import { CanactivateLoginService } from './canactivate-login.service';

describe('CanactivateLoginService', () => {
  let service: CanactivateLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanactivateLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
