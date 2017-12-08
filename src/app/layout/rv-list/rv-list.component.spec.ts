import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RvListComponent } from './rv-list.component';

describe('RvListComponent', () => {
  let component: RvListComponent;
  let fixture: ComponentFixture<RvListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RvListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RvListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
