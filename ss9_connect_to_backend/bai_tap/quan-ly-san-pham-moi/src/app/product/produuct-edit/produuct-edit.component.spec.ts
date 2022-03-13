import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduuctEditComponent } from './produuct-edit.component';

describe('ProduuctEditComponent', () => {
  let component: ProduuctEditComponent;
  let fixture: ComponentFixture<ProduuctEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduuctEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduuctEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
