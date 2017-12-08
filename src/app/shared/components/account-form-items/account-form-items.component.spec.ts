import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountFormItemsComponent } from './account-form-items.component';

describe('AccountFormItemsComponent', () => {
  let component: AccountFormItemsComponent;
  let fixture: ComponentFixture<AccountFormItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountFormItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountFormItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
