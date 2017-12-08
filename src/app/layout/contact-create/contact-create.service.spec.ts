import { TestBed, inject } from '@angular/core/testing';

import { ContactCreateService } from './contact-create.service';

describe('ContactCreateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactCreateService]
    });
  });

  it('should be created', inject([ContactCreateService], (service: ContactCreateService) => {
    expect(service).toBeTruthy();
  }));
});
