import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathGamerComponent } from './math-gamer.component';

describe('MathGamerComponent', () => {
  let component: MathGamerComponent;
  let fixture: ComponentFixture<MathGamerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathGamerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathGamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
