import { TestBed, inject } from '@angular/core/testing';

import { AccountTypeListService } from './account-type-list.service';

describe('AccountTypeListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountTypeListService]
    });
  });

  it('should be created', inject([AccountTypeListService], (service: AccountTypeListService) => {
    expect(service).toBeTruthy();
  }));
});
