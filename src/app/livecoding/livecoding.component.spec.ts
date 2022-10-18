import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivecodingComponent } from './livecoding.component';

describe('LivecodingComponent', () => {
  let component: LivecodingComponent;
  let fixture: ComponentFixture<LivecodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivecodingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivecodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
