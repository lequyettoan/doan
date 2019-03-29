import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NguoidungPage } from './nguoidung.page';

describe('NguoidungPage', () => {
  let component: NguoidungPage;
  let fixture: ComponentFixture<NguoidungPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NguoidungPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NguoidungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
