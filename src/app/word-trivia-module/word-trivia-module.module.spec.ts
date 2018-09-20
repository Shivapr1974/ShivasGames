import { WordTriviaModuleModule } from './word-trivia-module.module';

describe('WordTriviaModuleModule', () => {
  let wordTriviaModuleModule: WordTriviaModuleModule;

  beforeEach(() => {
    wordTriviaModuleModule = new WordTriviaModuleModule();
  });

  it('should create an instance', () => {
    expect(wordTriviaModuleModule).toBeTruthy();
  });
});
