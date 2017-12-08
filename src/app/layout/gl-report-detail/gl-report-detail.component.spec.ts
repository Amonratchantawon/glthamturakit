import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlReportDetailComponent } from './gl-report-detail.component';

describe('GlReportDetailComponent', () => {
  let component: GlReportDetailComponent;
  let fixture: ComponentFixture<GlReportDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlReportDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlReportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
