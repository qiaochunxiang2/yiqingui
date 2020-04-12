import { TestBed } from '@angular/core/testing';

import { YiqinghistoryService } from './yiqinghistory.service';

describe('YiqinghistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YiqinghistoryService = TestBed.get(YiqinghistoryService);
    expect(service).toBeTruthy();
  });
});
