import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiohangPage } from './giohang.page';

describe('GiohangPage', () => {
  let component: GiohangPage;
  let fixture: ComponentFixture<GiohangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiohangPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiohangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
