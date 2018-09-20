import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-math-calcs',
  templateUrl: './math-calcs.component.html',
  styleUrls: ['./math-calcs.component.css']
})
export class MathCalcsComponent implements OnInit {
  type: string; // 'Foo' or whatever type foo is,
  nums:number[] = [1,2,3,4,5,6,7,8,9,10,11,12] ;
  x:number=1;
  y:number=1;
  ans:number=2;
  oper:string="+";
  ratingVal:number=5;
  usrAns : string="";
  error : string="";
  init: boolean=true;
  score: number=0;
  instr: string="";
  page: string="" ;

  constructor(private router: Router, private route: ActivatedRoute,public dataService: DataService) { 
    this.router.events.subscribe((event:any) => {
      if (event.constructor.name === "NavigationEnd") {
        this.page = event.url;
       }
		})
  }
  
  ngOnInit() {
    this.type = this.route.snapshot.params.type;
    if(this.type !='tables'){
      this.error="";
      this.usrAns="";
      this.instr="";
      this.ratingVal=5;
      this.init=true;
      this.generate();
    }
  }
  setTables(incr : number) : void {
    this.x = this.x+incr;
  }
  setClearAns(): void{
    if (this.error==="") {
      this.usrAns = "";
    }else{
      return;
    }
  }
  clearAns(): void{
    if (this.error==="") {
      this.usrAns = "";
    }else{
      return;
    }
  }
  delAns(): void{
    if (this.error==="") {
      this.usrAns = this.usrAns.slice(0,-1);;
    }else{
      return;
    }
  }  
  setAns(usrAns : string) : void {
    if (this.error==="") {
      this.usrAns = this.usrAns+usrAns;
    }else{
      return;
    }
  }

  
  generate(): void  {
    if(!this.init){
      var usrAnnsNum: number = +this.usrAns;
      if(this.ratingVal==0){
        this.instr="Well played.";
        return;
      }
      // if (this.usrAns==="")  {
      //   this.instr="Please type your answer.";
      //   return;
      // }  
      this.instr="";
      if (this.error==="") {
        if(this.ans != +this.usrAns ){
          this.error="Correct answer is "+ this.ans+". ";
          this.ratingVal = this.ratingVal -1;
          return ;
        }else{
          this.score +=100;  
        }
      }
    }
    this.init=false;
    this.error="";
    this.instr="";
    this.usrAns="";
    var max:number=Math.pow(10, this.dataService.level);
    var type:string = this.type;
    var operArray:string[] = ['add','subs','mult','div'];
    this.x= this.dataService.getRandomInt(1, max);
    this.y= this.dataService.getRandomInt(1, max);
    if(type=="addsubs") type = operArray[this.dataService.getRandomInt(0,1)];
    if(type=="multdiv") type = operArray[this.dataService.getRandomInt(2,3)];
   
    if(type=="add") {
      this.ans=this.x + this.y; this.oper="+"
    };
    if(type=="subs") {
      this.y=this.dataService.getRandomInt(1, this.x);
      this.ans=this.x - this.y; this.oper="-"
    };
    if(type=="mult") {
      this.ans=this.x * this.y; this.oper="x"
    };
    if(type=="div") {
      this.x= this.y * this.dataService.getRandomInt(1, max);
      this.ans=this.x / this.y; this.oper="/"
    };
   }
 
}
