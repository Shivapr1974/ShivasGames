import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MathGamesModule } from './math-games/math-games.module';
import { LevelComponent } from './level/level.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WordTriviaModuleModule } from './word-trivia-module/word-trivia-module.module';
import { SharedmoduleModule } from './sharedmodule/sharedmodule.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LevelComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    MathGamesModule,
    AngularFontAwesomeModule,
    NgbModule,
    WordTriviaModuleModule,
    SharedmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [LevelComponent, NavbarComponent, AboutComponent, HomeComponent]
})
export class AppModule { }
