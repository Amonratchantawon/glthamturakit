import { TestBed, inject } from '@angular/core/testing';

import { JvCreateService } from './jv-create.service';

describe('JvCreateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JvCreateService]
    });
  });

  it('should be created', inject([JvCreateService], (service: JvCreateService) => {
    expect(service).toBeTruthy();
  }));
});
