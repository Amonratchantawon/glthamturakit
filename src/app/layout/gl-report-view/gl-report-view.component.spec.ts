import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlReportViewComponent } from './gl-report-view.component';

describe('GlReportViewComponent', () => {
  let component: GlReportViewComponent;
  let fixture: ComponentFixture<GlReportViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlReportViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlReportViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
