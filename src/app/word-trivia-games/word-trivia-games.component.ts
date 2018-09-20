import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, QuestionAns } from '../data.service';

@Component({
  selector: 'app-word-trivia-games',
  templateUrl: './word-trivia-games.component.html',
  styleUrls: ['./word-trivia-games.component.css']
})
export class WordTriviaGamesComponent implements OnInit {
  category: string; // 'Foo' or whatever type foo is,
  type: string; // 'Foo' or whatever type foo is,
  currIdx: number=0;
  currQuestion: QuestionAns=null;
  usrAns : string="";
  error : string="";  
  ratingVal:number=5;
  score: number=0;  
  showAns : string="";
  showQues: string="";
  complete: string="";

  //Hangman Variables
  hangmanCount: string="10";
  next: string="";
  //End Hangman Variables

  //Tester Variables
  testeruserValue="";
  //End Tester Variables

  alphaArray :string[]=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", " "];

  constructor(private route: ActivatedRoute, private router: Router, public dataService: DataService) { 
    this.router.events.subscribe((event:any) => {
      // if (event.constructor.name === "NavigationEnd") {
        this.category = this.route.snapshot.params.category;
        this.type = this.route.snapshot.params.type;
        this.currIdx=0;

      //  }
    })
  }

  ngOnInit() {
    this.category = this.route.snapshot.params.category;
    this.type = this.route.snapshot.params.type;
    this.currIdx=0;
    this.currQuestion=null;
    this.showAns="";    
    this.showQues="";
    this.error ="";    
    this.ratingVal=5;
    this.score=0;  
    this.complete="";
    this.dataService.initExclArray();
    if(this.type=="learner"){
      this.getNextQuestion(0);
    }
    if(this.type!="learner"){
      this.getRandomQuestionAns();
      this.currIdx++;
    }
  }
  resetHangMan(){
    var ansArr: string[]=this.currQuestion.scrambledAns.split("");
    for (let ans of ansArr) {
      this.usrAns =this.usrAns+"-";
    }  
  }
  setHangmanChars(usrAns : string){
    if(+this.hangmanCount<=0){
      this.showAns = this.currQuestion.scrambledAns;
      this.usrAns = "";
      this.next="10 tries are over.";
    }
    var ansArr: string[]=this.currQuestion.scrambledAns.toLocaleLowerCase().split("");
    var char: string="";
    var i: number=0;
    var ansRight: boolean =false;
    for (let ans of ansArr) {
      if(usrAns==ans){
        char = char+ usrAns;
        ansRight=true;
      }else{
        char = char + this.usrAns.charAt(i);
      }
      i++;
    }
    if(+this.hangmanCount>0){
      if(!ansRight) this.hangmanCount = ""+(+this.hangmanCount-1);
      this.usrAns = char;
    }  
   
  }
  setAns(usrAns : string) : void {
    if (this.error==="") {
      if(this.type=='hangman'){
        this.setHangmanChars(usrAns);  
      }else{
        this.usrAns = this.usrAns+usrAns;
      }
    }else{
      return;
    }
  }   
  setShowAns() : void {
      if(this.showAns!="") return;
      this.usrAns="";
      this.ratingVal=this.ratingVal-1;      
      if(this.ratingVal==0) this.complete="Well Played." ;

      this.showAns = this.currQuestion.scrambledAns;
  }   
  setShowQues() : void {
    this.showQues =this.currQuestion.scrambledQuestion;
  }  
  onSelectionChange(entry) {
    if(this.showAns!="") return;
    this.testeruserValue = entry;
  }
  private validateHangman() : boolean {
    if(this.usrAns==this.currQuestion.scrambledAns.toLocaleLowerCase()){
      return true;
    }else{
      this.usrAns="";
      this.showAns = this.currQuestion.scrambledAns;
      return false;
    }
  }   
  private validateScrambler() : boolean {
    if(this.usrAns==this.currQuestion.scrambledAns.toLocaleLowerCase()){
      return true;
    }else{
      this.showAns = this.currQuestion.scrambledAns;
      return false;
    }
  }   
  private validateTester() : boolean {
    if(this.testeruserValue==this.currQuestion.ans){
      return true;
    }else{
      this.showAns = this.currQuestion.ans;
      return false;
    }
  }   

  getRandomQuestionAns(){
    if(this.ratingVal==0) return;
    var checkAns: boolean=true;
    if(this.currIdx>0 && this.showAns==""){
      if(this.type=="hangman") checkAns = this.validateHangman(); 
      if(this.type=="scrambler") checkAns = this.validateScrambler(); 
      if(this.type=="tester") checkAns = this.validateTester(); 
      if(!checkAns) {
        this.ratingVal=this.ratingVal-1;
        if(this.ratingVal==0) this.complete="Well Played." ;
        return;
      }  
      this.score=this.score+100;
    }

    var question:QuestionAns = this.dataService.getRandomQuestionAns( this.category);
    if(!question) {
      return;
    } 
    // console.log("Exceeded Count "+ this.dataService.exceedCount);
    if(this.dataService.exceedCount){
      this.complete="Well Played. You completed this level." ;
      return;
    }
    // console.log(" (/.*\d.*/g).test(question.scrambledAns) "+  (/.*\d.*/g).test(question.scrambledAns));
    // console.log(" (/.*\d.*/g).test('K2K') "+  (/.*\d.*/g).test('K2K'));
    if(this.type=="hangman"){
      //Remove Number as Hangman does not have number keys
      if ( (/.*\d.*/g).test(question.scrambledAns)) question = this.dataService.getRandomQuestionAns( this.category);
      if ( (/.*\d.*/g).test(question.scrambledAns)) question = this.dataService.getRandomQuestionAns( this.category);
      if ( (/.*\d.*/g).test(question.scrambledAns)) question = this.dataService.getRandomQuestionAns( this.category);
    }
    
    this.currQuestion = question;
    this.usrAns ="";
    this.error ="";    
    this.showAns="";    
    this.showQues="";
    this.hangmanCount="10";  
    this.next="";
    if(this.type=="hangman") this.resetHangMan();  
  }
  getNextQuestion(incr: number){
    var idx = this.currIdx+incr;
    var question:QuestionAns = this.dataService.getQuestionAnsByIdx( this.category, idx);
    if(!question) {
      return;
    } 
    this.currIdx = idx;
    this.currQuestion = question;
  }
  clearAns(){
    this.usrAns =""
  }
  delAns(){
    this.usrAns = this.usrAns.slice(0,-1);
  }
}
