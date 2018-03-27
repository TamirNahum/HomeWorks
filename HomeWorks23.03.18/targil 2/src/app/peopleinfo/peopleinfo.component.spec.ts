import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleinfoComponent } from './peopleinfo.component';

describe('PeopleinfoComponent', () => {
  let component: PeopleinfoComponent;
  let fixture: ComponentFixture<PeopleinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
