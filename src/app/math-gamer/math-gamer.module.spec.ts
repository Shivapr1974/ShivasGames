import { MathGamerModule } from './math-gamer.module';

describe('MathGamerModule', () => {
  let mathGamerModule: MathGamerModule;

  beforeEach(() => {
    mathGamerModule = new MathGamerModule();
  });

  it('should create an instance', () => {
    expect(mathGamerModule).toBeTruthy();
  });
});
