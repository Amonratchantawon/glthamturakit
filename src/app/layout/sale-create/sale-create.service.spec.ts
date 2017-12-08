import { TestBed, inject } from '@angular/core/testing';

import { SaleCreateService } from './sale-create.service';

describe('SaleCreateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaleCreateService]
    });
  });

  it('should be created', inject([SaleCreateService], (service: SaleCreateService) => {
    expect(service).toBeTruthy();
  }));
});
