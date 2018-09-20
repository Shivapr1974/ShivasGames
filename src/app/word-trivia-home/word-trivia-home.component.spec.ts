import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordTriviaHomeComponent } from './word-trivia-home.component';

describe('WordTriviaHomeComponent', () => {
  let component: WordTriviaHomeComponent;
  let fixture: ComponentFixture<WordTriviaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordTriviaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordTriviaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
