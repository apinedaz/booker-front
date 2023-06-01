import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudeFormComponent } from './solicitude-form.component';

describe('SolicitudeFormComponent', () => {
  let component: SolicitudeFormComponent;
  let fixture: ComponentFixture<SolicitudeFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitudeFormComponent]
    });
    fixture = TestBed.createComponent(SolicitudeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
