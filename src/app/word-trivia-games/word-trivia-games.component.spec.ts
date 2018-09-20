import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordTriviaGamesComponent } from './word-trivia-games.component';

describe('WordTriviaGamesComponent', () => {
  let component: WordTriviaGamesComponent;
  let fixture: ComponentFixture<WordTriviaGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordTriviaGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordTriviaGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
