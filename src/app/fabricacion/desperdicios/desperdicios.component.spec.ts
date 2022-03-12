import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesperdiciosComponent } from './desperdicios.component';

describe('DesperdiciosComponent', () => {
  let component: DesperdiciosComponent;
  let fixture: ComponentFixture<DesperdiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesperdiciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesperdiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
