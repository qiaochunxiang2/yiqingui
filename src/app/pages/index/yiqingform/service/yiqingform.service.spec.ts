import { TestBed } from '@angular/core/testing';

import { YiqingformService } from './yiqingform.service';

describe('YiqingformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YiqingformService = TestBed.get(YiqingformService);
    expect(service).toBeTruthy();
  });
});
