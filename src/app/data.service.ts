import { Injectable } from '@angular/core';
import wordsJson from '../assets/words.json';
import triviaJson from '../assets/trivia.json';


// export interface Words {
//   question: string;
//   ans: string;
// }
export interface QuestionAns {
  question: string;
  ans: string;
  opt1: string;
  opt2: string;
  opt3: string;
  scrambledOptions: string[];
  scrambledAnswer: string[];
  scrambledQuestion: string;
  scrambledAns: string;
}



@Injectable({
  providedIn: 'root'
})


export class DataService {
  level :number =2;
  category :string ="Geography";
  levelArray: string[]=["kid","easy","medium","tough"]
  levelStr: string = this.levelArray[this.level -1];
  words: QuestionAns[] = wordsJson.words[this.levelArray[this.level -1]];
  trivia: QuestionAns[] = triviaJson.trivia[this.category];
  excludeArray: number[]=[];
  exceedCount:boolean=false;
  excludeMaxCount: number=20;
  optionArray:number[]=[];
  constructor() { 
    // this.scrambleArray(this.levelArray);
    // var q : QuestionAns = this.getRandomWord();
    // this.scrambleArray(q.ans.split(""));
    // q = this.scrambleOptionsAnswer(q);
  }
  initExclArray(){
    this.excludeArray=[];
    this.exceedCount=false;
  }
  getRandomIntExclArray(min, max,opt: boolean=false):number {
    var e: number; 
    var i: number=0;
    var localExcludeArray: number[]=this.excludeArray;
    if(opt) localExcludeArray =this.optionArray;

     do { 
       i++;
       e =this.getRandomInt(min, max); 
       if(i>this.excludeMaxCount) {
         this.exceedCount=true;
         break;
       }  
      } while ((localExcludeArray.indexOf(e)>=0) )

      if(!opt) {
        this.excludeArray.push(e);
        // console.log("this.excludeArray: "+ this.excludeArray);
      }else{
        this.optionArray.push(e);
        // console.log("this.optionArray: "+ this.optionArray);
      }
    return e; 
  } 
 
  getRandomInt(min, max):number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } 
 
  getQuestionAns(type: string) :QuestionAns[]{
    if(type=="word"){
      return this.getWords();
    }else{
      return this.getTrivias();
    }
  }
  getRandomQuestionAns(type: string) :QuestionAns{
    var questionAns : QuestionAns;
    if(type=="word"){
      questionAns=  this.getRandomWord();
    }else{
      questionAns=  this.getRandomTrivia();
    }
    if(questionAns==null) return null;
    questionAns = this.scrambleOptionsAnswer(type, questionAns);
    return questionAns;
  }  
  getQuestionAnsByIdx(type: string, idx: number) :QuestionAns{
    var quesAns: QuestionAns[]= this.getQuestionAns(type) ;
    var questionAns : QuestionAns;
    if(idx>quesAns.length-1){
      return null;
    }else{
      questionAns= quesAns[idx];
      questionAns = this.scrambleOptionsAnswer(type, questionAns);
      return questionAns;
    }
  }
  
  private scrambleOptionsAnswer(type: string, quesAns: QuestionAns) :QuestionAns{
    // quesAns = this.fillOptions(type, quesAns);     
    var scrambleWord: string="";
    var optArr: string[] = [quesAns.ans, quesAns.opt1, quesAns.opt2, quesAns.opt3]
    quesAns.scrambledOptions = this.scrambleArray(this.scrambleArray(optArr));
    if(type=="word"){
      scrambleWord = quesAns.question;
      quesAns.scrambledAns =  scrambleWord;
      quesAns.scrambledQuestion =  quesAns.ans;
    }else{
      scrambleWord = quesAns.ans;
      quesAns.scrambledAns =  scrambleWord;
      quesAns.scrambledQuestion =  quesAns.question;
    }  
    //quesAns.scrambledAnswer = Array.from(new Set(this.scrambleArray(scrambleWord.toLowerCase().split("")) ));
    quesAns.scrambledAnswer = Array.from(this.scrambleArray(scrambleWord.toLowerCase().split("")));
    return quesAns;
  }

  // private fillOptions(type: string, quesAns: QuestionAns) :QuestionAns{
  //   debugger;
  //   if(type=="word"){
  //     return this.getRandomOptions(quesAns, -1);
  //   }else{
  //     return quesAns;
  //   }
  // }

  private scrambleArray(array: string[]):string[]  {
    // console.log("Old Array is "+array);
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
    }
    // console.log("New Array is "+array);
    return array;
  }
  private getWords() : QuestionAns[]{
    return wordsJson.words[this.levelArray[this.level -1]];
  }
  private getTrivias() : QuestionAns[]{
    return triviaJson.trivia[this.category]; 
  }
  private getRandomOptions(currWord: QuestionAns, idx:number) : QuestionAns{
    this.optionArray=[idx];
    var idx1:number = this.getRandomIntExclArray(0, this.words.length-1, true);
    currWord.opt1 = this.words[idx1].ans;
    var idx2:number = this.getRandomIntExclArray(0, this.words.length-1, true);
    currWord.opt2 = this.words[idx2].ans;
    var idx3:number = this.getRandomIntExclArray(0, this.words.length-1,true);
    currWord.opt3 = this.words[idx3].ans;
    return currWord;
  }
  private getRandomWord(): QuestionAns{
    this.words =  this.getWords();
    var idx:number = this.getRandomIntExclArray(0, this.words.length-1);
    if(idx==-1) return null; 
    var currWord: QuestionAns =  this.getRandomOptions(this.words[idx], idx) ;
    return currWord;
  }
  private getRandomTrivia(): QuestionAns{
    this.trivia =  this.getTrivias();
    var idx:number = this.getRandomIntExclArray(0, this.trivia.length-1);
    if(idx==-1) return null;
    var currTrivia: QuestionAns =  this.trivia[idx] ;
    return currTrivia;
  }
}
