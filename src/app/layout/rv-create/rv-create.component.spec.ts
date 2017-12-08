import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RvCreateComponent } from './rv-create.component';

describe('RvCreateComponent', () => {
  let component: RvCreateComponent;
  let fixture: ComponentFixture<RvCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RvCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RvCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
