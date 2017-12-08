import { TestBed, inject } from '@angular/core/testing';

import { NewpageService } from './newpage.service';

describe('NewpageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewpageService]
    });
  });

  it('should be created', inject([NewpageService], (service: NewpageService) => {
    expect(service).toBeTruthy();
  }));
});
