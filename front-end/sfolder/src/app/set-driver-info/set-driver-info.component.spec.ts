import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDriverInfoComponent } from './set-driver-info.component';

describe('SetDriverInfoComponent', () => {
  let component: SetDriverInfoComponent;
  let fixture: ComponentFixture<SetDriverInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetDriverInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetDriverInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
