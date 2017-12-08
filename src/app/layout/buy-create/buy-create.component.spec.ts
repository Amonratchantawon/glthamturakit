import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCreateComponent } from './buy-create.component';

describe('BuyCreateComponent', () => {
  let component: BuyCreateComponent;
  let fixture: ComponentFixture<BuyCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
