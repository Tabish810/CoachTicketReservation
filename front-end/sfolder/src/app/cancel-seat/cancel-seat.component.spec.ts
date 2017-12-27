import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelSeatComponent } from './cancel-seat.component';

describe('CancelSeatComponent', () => {
  let component: CancelSeatComponent;
  let fixture: ComponentFixture<CancelSeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelSeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
