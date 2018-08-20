import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MathGamerComponent } from './math-gamer/math-gamer.component';

const routes: Routes = [
  { path: 'mathGames', component: MathGamerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
