import {WordDefinition} from './word-def'
export class UserDefinitionAnswer{
  userAnswer: string;
  wordDef: WordDefinition;
  show: boolean;

  constructor(word: string, def: string){
    this.wordDef = new WordDefinition(word, def);
    this.show = true;
  }

  isAnswerCorrect(){
    return this.userAnswer === this.wordDef.word;
  }

  resetAnswer(){
    this.userAnswer = '';
    this.show = true;
  }
}