import { TestBed, inject } from '@angular/core/testing';

import { GlReportViewService } from './gl-report-view.service';

describe('GlReportViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlReportViewService]
    });
  });

  it('should be created', inject([GlReportViewService], (service: GlReportViewService) => {
    expect(service).toBeTruthy();
  }));
});
