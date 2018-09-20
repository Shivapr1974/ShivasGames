import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'ct-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  page: string ;
  math: boolean =false;
  word: boolean =false;
  trivia: boolean =false;
  level: boolean =false;
  category: boolean=false;
  constructor(private router: Router, public dataService: DataService) { 
    this.router.events.subscribe((event:any) => {
      if (event.constructor.name === "NavigationEnd") {
        this.page = event.url;
        this.math=false;
        this.word=false;
        this.trivia=false;
        this.category=false;

        if(this.page.indexOf("/math")>=0) this.math = true;
        if(this.page.indexOf("/wordTriviaHome/word")>=0) this.word = true;
        if(this.page.indexOf("/wordTrivia/word")>=0) this.word = true;
        if(this.page.indexOf("/wordTriviaHome/trivia")>=0) this.trivia = true;
        if(this.page.indexOf("/wordTrivia/trivia")>=0) this.trivia = true;
        if(this.page.indexOf("/level/level")>=0) this.level = true; 
        if(this.page.indexOf("/category")>=0) this.category = true; 
        
        // console.log(event.url);
        // console.log("math: "+ this.math);
        // console.log("word: "+ this.word);
        // console.log("trivia: "+ this.trivia);
        // console.log("level: "+ this.level);

       }
    })


  }
 
  ngOnInit() {
  }
 
}
