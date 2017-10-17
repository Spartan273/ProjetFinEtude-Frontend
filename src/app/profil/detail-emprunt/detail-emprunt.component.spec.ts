import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEmpruntComponent } from './detail-emprunt.component';

describe('DetailEmpruntComponent', () => {
  let component: DetailEmpruntComponent;
  let fixture: ComponentFixture<DetailEmpruntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailEmpruntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEmpruntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
