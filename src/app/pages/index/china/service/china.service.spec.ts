import { TestBed } from '@angular/core/testing';

import { ChinaService } from './china.service';

describe('ChinaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChinaService = TestBed.get(ChinaService);
    expect(service).toBeTruthy();
  });
});
