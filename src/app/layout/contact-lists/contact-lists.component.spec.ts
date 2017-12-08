import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListsComponent } from './contact-lists.component';

describe('ContactListsComponent', () => {
  let component: ContactListsComponent;
  let fixture: ComponentFixture<ContactListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
