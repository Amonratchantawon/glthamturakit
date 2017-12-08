import { TestBed, inject } from '@angular/core/testing';

import { AccountTypeService } from './account-type.service';

describe('AccountTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountTypeService]
    });
  });

  it('should be created', inject([AccountTypeService], (service: AccountTypeService) => {
    expect(service).toBeTruthy();
  }));
});
