import { Component } from '@angular/core';


import {IbvService} from '../services/ibv.service';
import {UserOptionService} from '../services/user-opt.service'

import {WordDefinition} from '../models/word-def';
import {WordCount} from '../models/word-count';
import {UserDefinitionAnswer} from '../models/user-def-answer'

@Component({
  selector: 'definition-ex',
  templateUrl: '/app/ibv/definition-ex/definition-ex.component.html'
})
export class DefinitionExComponent {
  allDefinition: UserDefinitionAnswer[];
  //saving {"word": counter}, the counter is how many times user has used this word in the excercise
  allOptions: WordCount[];
  correctAnswer: number;
  showScores: boolean;

  constructor(private ibvService: IbvService, private userOptionService: UserOptionService) {
    this.ibvService.redirectIfResourceNotLoaded();
    this.showScores = false;
    this.populateDefinition();
  }

  populateDefinition() {
    this.allDefinition = [];
    this.allOptions = [];

    console.log("test");
    let resources = this.ibvService.getResources();
    
    for (let unitName in resources) {
      let sections = resources[unitName]["definition-sections"];

      for (let section of sections) {
        if (this.userOptionService.getDefinitionOption().isSectionSelected(unitName, section.title)){
          let words = section.words;
          for (let word in words) {
            let definition = words[word];
            this.allDefinition.push(new UserDefinitionAnswer(word, definition));
            this.allOptions.push(new WordCount(word, 0));//default counter is 0
          }
        }
      }
      
    }
 
 }

 submitAnswer(){
   this.correctAnswer = 0;
   for (let userAnswer of this.allDefinition){
     if (userAnswer.isAnswerCorrect()){
       this.correctAnswer++;
     }
   }

   this.showScores = true;
 }

 private showAllAnswers(){
   for (let userAnswer of this.allDefinition){
     userAnswer.show = true;
   }
 }

 private showWrongAnswers(){
   for (let userAnswer of this.allDefinition){
     if (userAnswer.isAnswerCorrect()){
       userAnswer.show = false;
     }else{
       userAnswer.show = true;
     }
   }
 }

 reviewAnswers(){
   this.showAllAnswers();
   this.showScores = false;
 }

 reviewWrongAnswers(){
   this.showWrongAnswers();
   this.showScores = false;
 }

 redo(){
   for (let userAnswer of this.allDefinition){
     userAnswer.resetAnswer();
     userAnswer.show = true;
   }

   this.showScores = false;
 }

}
