import { TestBed, inject } from '@angular/core/testing';

import { GlReportService } from './gl-report.service';

describe('GlReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlReportService]
    });
  });

  it('should be created', inject([GlReportService], (service: GlReportService) => {
    expect(service).toBeTruthy();
  }));
});
