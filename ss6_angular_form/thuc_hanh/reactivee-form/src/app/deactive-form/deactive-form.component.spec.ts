import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactiveFormComponent } from './deactive-form.component';

describe('DeactiveFormComponent', () => {
  let component: DeactiveFormComponent;
  let fixture: ComponentFixture<DeactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
