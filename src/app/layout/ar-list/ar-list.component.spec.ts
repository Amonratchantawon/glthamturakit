import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArListComponent } from './ar-list.component';

describe('ArListComponent', () => {
  let component: ArListComponent;
  let fixture: ComponentFixture<ArListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
