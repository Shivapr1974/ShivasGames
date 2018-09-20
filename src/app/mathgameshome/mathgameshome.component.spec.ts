import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathgameshomeComponent } from './mathgameshome.component';

describe('MathgameshomeComponent', () => {
  let component: MathgameshomeComponent;
  let fixture: ComponentFixture<MathgameshomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathgameshomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathgameshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
