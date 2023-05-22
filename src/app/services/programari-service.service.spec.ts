import { TestBed } from '@angular/core/testing';

import { ProgramariServiceService } from './programari-service.service';

describe('ProgramariServiceService', () => {
  let service: ProgramariServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramariServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
