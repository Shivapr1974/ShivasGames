import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LevelComponent } from './level/level.component';
import { MathgameshomeComponent } from './mathgameshome/mathgameshome.component';


const routes: Routes = [
  { path: 'mathHome', component: MathgameshomeComponent },
  { path: 'level', component: LevelComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
