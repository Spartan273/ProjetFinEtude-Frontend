import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArticlesMembresComponent } from './list-articles-membres.component';

describe('ListArticlesMembresComponent', () => {
  let component: ListArticlesMembresComponent;
  let fixture: ComponentFixture<ListArticlesMembresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListArticlesMembresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListArticlesMembresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
