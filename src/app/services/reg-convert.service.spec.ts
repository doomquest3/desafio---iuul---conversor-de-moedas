import { TestBed } from '@angular/core/testing';

import { RegConvertService } from './reg-convert.service';

describe('RegConvertService', () => {
  let service: RegConvertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegConvertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
