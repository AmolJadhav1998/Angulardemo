import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsopComponent } from './rxjsop.component';

describe('RxjsopComponent', () => {
  let component: RxjsopComponent;
  let fixture: ComponentFixture<RxjsopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
