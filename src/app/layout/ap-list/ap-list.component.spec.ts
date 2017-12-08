import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApListComponent } from './ap-list.component';

describe('ApListComponent', () => {
  let component: ApListComponent;
  let fixture: ComponentFixture<ApListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
