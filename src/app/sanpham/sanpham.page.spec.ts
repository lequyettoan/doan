import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanphamPage } from './sanpham.page';

describe('SanphamPage', () => {
  let component: SanphamPage;
  let fixture: ComponentFixture<SanphamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanphamPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanphamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
