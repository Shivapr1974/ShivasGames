import { MathGamesModule } from './math-games.module';

describe('MathGamesModule', () => {
  let mathGamesModule: MathGamesModule;

  beforeEach(() => {
    mathGamesModule = new MathGamesModule();
  });

  it('should create an instance', () => {
    expect(mathGamesModule).toBeTruthy();
  });
});
