import { TestBed, inject } from '@angular/core/testing';

import { ExpendListsService } from './expend-lists.service';

describe('ExpendListsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpendListsService]
    });
  });

  it('should be created', inject([ExpendListsService], (service: ExpendListsService) => {
    expect(service).toBeTruthy();
  }));
});
