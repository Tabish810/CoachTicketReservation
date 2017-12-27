import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCoachInfoComponent } from './set-coach-info.component';

describe('SetCoachInfoComponent', () => {
  let component: SetCoachInfoComponent;
  let fixture: ComponentFixture<SetCoachInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetCoachInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetCoachInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
