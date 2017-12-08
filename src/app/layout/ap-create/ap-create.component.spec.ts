import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApCreateComponent } from './ap-create.component';

describe('ApCreateComponent', () => {
  let component: ApCreateComponent;
  let fixture: ComponentFixture<ApCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
