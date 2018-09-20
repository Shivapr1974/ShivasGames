import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MathGamesRoutingModule } from './math-games-routing.module';
import { MathgameshomeComponent } from '../mathgameshome/mathgameshome.component';
import { MathCalcsComponent } from '../math-calcs/math-calcs.component';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';

@NgModule({
  imports: [
    CommonModule,
    MathGamesRoutingModule,
    SharedmoduleModule
  ],
  declarations: [ MathgameshomeComponent,  MathCalcsComponent],
  exports: [ MathgameshomeComponent,  MathCalcsComponent]
})
export class MathGamesModule { }
