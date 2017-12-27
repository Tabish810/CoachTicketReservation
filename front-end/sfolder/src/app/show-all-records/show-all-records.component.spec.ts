import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllRecordsComponent } from './show-all-records.component';

describe('ShowAllRecordsComponent', () => {
  let component: ShowAllRecordsComponent;
  let fixture: ComponentFixture<ShowAllRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
