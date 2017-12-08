import { TestBed, inject } from '@angular/core/testing';

import { GlReportDetailService } from './gl-report-detail.service';

describe('GlReportDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlReportDetailService]
    });
  });

  it('should be created', inject([GlReportDetailService], (service: GlReportDetailService) => {
    expect(service).toBeTruthy();
  }));
});
