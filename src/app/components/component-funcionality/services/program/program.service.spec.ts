import { TestBed } from '@angular/core/testing';

import { ProgramService } from './program.service';

describe('OperativeUnitService', () => {
  let service: ProgramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
