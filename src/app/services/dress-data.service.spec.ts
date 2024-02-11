import { TestBed } from '@angular/core/testing';

import { DressDataService } from './dress-data.service';

describe('DressDataService', () => {
  let service: DressDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DressDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
