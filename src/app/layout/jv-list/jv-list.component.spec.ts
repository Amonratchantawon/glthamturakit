import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JvListComponent } from './jv-list.component';

describe('JvListComponent', () => {
  let component: JvListComponent;
  let fixture: ComponentFixture<JvListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JvListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JvListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
