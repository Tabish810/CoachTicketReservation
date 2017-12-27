import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveDriverInfoComponent } from './save-driver-info.component';

describe('SaveDriverInfoComponent', () => {
  let component: SaveDriverInfoComponent;
  let fixture: ComponentFixture<SaveDriverInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveDriverInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveDriverInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
