import { TestBed, inject } from '@angular/core/testing';

import { BuyCreateService } from './buy-create.service';

describe('BuyCreateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuyCreateService]
    });
  });

  it('should be created', inject([BuyCreateService], (service: BuyCreateService) => {
    expect(service).toBeTruthy();
  }));
});
