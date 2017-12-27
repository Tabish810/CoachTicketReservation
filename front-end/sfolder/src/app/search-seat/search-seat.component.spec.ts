import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSeatComponent } from './search-seat.component';

describe('SearchSeatComponent', () => {
  let component: SearchSeatComponent;
  let fixture: ComponentFixture<SearchSeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
