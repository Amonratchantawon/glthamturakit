import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvCreateComponent } from './pv-create.component';

describe('PvCreateComponent', () => {
  let component: PvCreateComponent;
  let fixture: ComponentFixture<PvCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
