import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbitionsComponent } from './ambitions.component';

describe('AmbitionsComponent', () => {
  let component: AmbitionsComponent;
  let fixture: ComponentFixture<AmbitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbitionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
