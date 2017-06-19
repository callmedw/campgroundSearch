import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampgroundDetailComponent } from './campground-detail.component';

describe('CampgroundDetailComponent', () => {
  let component: CampgroundDetailComponent;
  let fixture: ComponentFixture<CampgroundDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampgroundDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampgroundDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
