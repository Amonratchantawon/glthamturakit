import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JvCreateComponent } from './jv-create.component';

describe('JvCreateComponent', () => {
  let component: JvCreateComponent;
  let fixture: ComponentFixture<JvCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JvCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JvCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
