import { TestBed, inject } from '@angular/core/testing';

import { ExpendCreateService } from './expend-create.service';

describe('ExpendCreateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpendCreateService]
    });
  });

  it('should be created', inject([ExpendCreateService], (service: ExpendCreateService) => {
    expect(service).toBeTruthy();
  }));
});
