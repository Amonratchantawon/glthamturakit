import { TestBed, inject } from '@angular/core/testing';

import { ContactListsService } from './contact-lists.service';

describe('ContactListsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactListsService]
    });
  });

  it('should be created', inject([ContactListsService], (service: ContactListsService) => {
    expect(service).toBeTruthy();
  }));
});
