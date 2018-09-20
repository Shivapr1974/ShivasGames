import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WordTriviaModuleRoutingModule } from './word-trivia-module-routing.module';
import { WordTriviaHomeComponent } from '../word-trivia-home/word-trivia-home.component';
import { WordTriviaGamesComponent } from '../word-trivia-games/word-trivia-games.component';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';

@NgModule({
  imports: [
    CommonModule,
    WordTriviaModuleRoutingModule,
    SharedmoduleModule 
  ],
  declarations: [WordTriviaHomeComponent, WordTriviaGamesComponent],
  exports: [WordTriviaHomeComponent, WordTriviaGamesComponent]
})
export class WordTriviaModuleModule { }
