import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegComponentComponent } from './veg-component.component';

describe('VegComponentComponent', () => {
  let component: VegComponentComponent;
  let fixture: ComponentFixture<VegComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
