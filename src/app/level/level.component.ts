import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {
  type: string="";

  constructor(private route: ActivatedRoute, private router: Router, private location: Location, public dataService: DataService) { 
    this.router.events.subscribe((event:any) => {
        this.type = this.route.snapshot.params.type;
    })
  }
  ngOnInit() {
  }
  onSelectionChange(entry) {
    this.dataService.level = entry;
  }
  onCategoryChange(entry) {
    this.dataService.category = entry;
  }
  goBack(){
    this.location.back();
  }

}
