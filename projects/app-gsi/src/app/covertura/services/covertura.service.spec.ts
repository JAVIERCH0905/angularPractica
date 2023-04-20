import { TestBed } from '@angular/core/testing';

import { CoverturaService } from './covertura.service';

describe('CoverturaService', () => {
  let service: CoverturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoverturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
