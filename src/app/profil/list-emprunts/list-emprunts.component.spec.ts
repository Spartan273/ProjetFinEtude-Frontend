import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmpruntsComponent } from './list-emprunts.component';

describe('ListEmpruntsComponent', () => {
  let component: ListEmpruntsComponent;
  let fixture: ComponentFixture<ListEmpruntsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEmpruntsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmpruntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
