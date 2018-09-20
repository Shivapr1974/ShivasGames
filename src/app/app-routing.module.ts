import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LevelComponent } from './level/level.component';
import { MathgameshomeComponent } from './mathgameshome/mathgameshome.component';
import { MathCalcsComponent } from './math-calcs/math-calcs.component';
import { WordTriviaHomeComponent } from './word-trivia-home/word-trivia-home.component';
import { WordTriviaGamesComponent } from './word-trivia-games/word-trivia-games.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'mathHome', component: MathgameshomeComponent },
  { path: 'level/:type', component: LevelComponent },
  { path: 'mathCalc/:type', component: MathCalcsComponent },
  { path: 'wordTriviaHome/:category', component: WordTriviaHomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'wordTrivia/:category/:type', component: WordTriviaGamesComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
