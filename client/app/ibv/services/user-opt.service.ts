import {Injectable} from '@angular/core';//make server injectable
import {Http, Headers} from '@angular/http';//make request to api
import 'rxjs/add/operator/map'; //observable
import 'rxjs/add/operator/toPromise';


import {DefinitionOption} from '../models/definition-opt'
@Injectable()
export class UserOptionService{

   private definitionOption: DefinitionOption
    
    //injecting
    constructor (private http: Http){
       
    };

    setDefinitionOption(selectedOption: DefinitionOption){
        console.log(selectedOption);
        this.definitionOption = selectedOption;
    };

    getDefinitionOption(){
        return this.definitionOption;
    };
}