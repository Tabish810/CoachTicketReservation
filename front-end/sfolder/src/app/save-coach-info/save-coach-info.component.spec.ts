import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCoachInfoComponent } from './save-coach-info.component';

describe('SaveCoachInfoComponent', () => {
  let component: SaveCoachInfoComponent;
  let fixture: ComponentFixture<SaveCoachInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveCoachInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveCoachInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
