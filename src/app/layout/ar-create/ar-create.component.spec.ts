import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArCreateComponent } from './ar-create.component';

describe('ArCreateComponent', () => {
  let component: ArCreateComponent;
  let fixture: ComponentFixture<ArCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
