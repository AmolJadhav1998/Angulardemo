import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Binding01Component } from './binding01.component';

describe('Binding01Component', () => {
  let component: Binding01Component;
  let fixture: ComponentFixture<Binding01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Binding01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Binding01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
