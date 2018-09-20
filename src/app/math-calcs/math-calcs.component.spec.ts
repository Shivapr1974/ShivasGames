import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathCalcsComponent } from './math-calcs.component';

describe('MathCalcsComponent', () => {
  let component: MathCalcsComponent;
  let fixture: ComponentFixture<MathCalcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathCalcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathCalcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
