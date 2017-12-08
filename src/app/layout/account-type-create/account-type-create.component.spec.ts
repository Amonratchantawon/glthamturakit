import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTypeCreateComponent } from './account-type-create.component';

describe('AccountTypeCreateComponent', () => {
  let component: AccountTypeCreateComponent;
  let fixture: ComponentFixture<AccountTypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountTypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
