import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleInfoComponentComponent } from './article-info-component.component';

describe('ArticleInfoComponentComponent', () => {
  let component: ArticleInfoComponentComponent;
  let fixture: ComponentFixture<ArticleInfoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleInfoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
