import { TestBed } from '@angular/core/testing';

import { PassmasterService } from './passmaster.service';

describe('PassmasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassmasterService = TestBed.get(PassmasterService);
    expect(service).toBeTruthy();
  });
});
