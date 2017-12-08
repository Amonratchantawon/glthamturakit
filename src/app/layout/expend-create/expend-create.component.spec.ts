import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpendCreateComponent } from './expend-create.component';

describe('ExpendCreateComponent', () => {
  let component: ExpendCreateComponent;
  let fixture: ComponentFixture<ExpendCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpendCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpendCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
