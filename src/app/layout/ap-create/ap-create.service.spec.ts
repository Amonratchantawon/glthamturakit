import { TestBed, inject } from '@angular/core/testing';

import { ApCreateService } from './ap-create.service';

describe('ApCreateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApCreateService]
    });
  });

  it('should be created', inject([ApCreateService], (service: ApCreateService) => {
    expect(service).toBeTruthy();
  }));
});
