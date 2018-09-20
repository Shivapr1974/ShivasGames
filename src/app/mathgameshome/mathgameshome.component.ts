import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mathgameshome',
  templateUrl: './mathgameshome.component.html',
  styleUrls: ['./mathgameshome.component.css']
})
export class MathgameshomeComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

}
