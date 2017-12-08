import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvListComponent } from './pv-list.component';

describe('PvListComponent', () => {
  let component: PvListComponent;
  let fixture: ComponentFixture<PvListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
