import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-word-trivia-home',
  templateUrl: './word-trivia-home.component.html',
  styleUrls: ['./word-trivia-home.component.css']
})
export class WordTriviaHomeComponent implements OnInit {
  category: string; // 'Foo' or whatever type foo is,

  constructor(private route: ActivatedRoute, private router: Router, public dataService: DataService) { 
    this.router.events.subscribe((event:any) => {
      // if (event.constructor.name === "NavigationEnd") {
        this.category = this.route.snapshot.params.category;
      //  }
    })
  }

  ngOnInit() {
    this.category = this.route.snapshot.params.category;
  }
  setHidden(category : string) : boolean {
    return !(category==this.category);
  }
}
