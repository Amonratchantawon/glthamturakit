import { TestBed, inject } from '@angular/core/testing';

import { AccountCreateService } from './account-create.service';

describe('AccountCreateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountCreateService]
    });
  });

  it('should be created', inject([AccountCreateService], (service: AccountCreateService) => {
    expect(service).toBeTruthy();
  }));
});
