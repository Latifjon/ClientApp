import { TestBed } from '@angular/core/testing';

import { InProcessService } from './in-process.service';

describe('InProcessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InProcessService = TestBed.get(InProcessService);
    expect(service).toBeTruthy();
  });
});
