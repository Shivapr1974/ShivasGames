import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathGamerComponent } from './math-gamer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ MathGamerComponent],
  exports: [MathGamerComponent]
})
export class MathGamerModule { }
