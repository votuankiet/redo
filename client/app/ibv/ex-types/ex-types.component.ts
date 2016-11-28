import { Component } from '@angular/core';

import {IbvService} from '../services/ibv.service'
@Component({
  selector: 'ex-types',
  templateUrl: '/app/ibv/ex-types/ex-types.component.html'
})
export class ExcerciseTypesComponent { 
  constructor(private ibvService: IbvService){
      this.ibvService.getDefinitionExResources().subscribe(resources => {
        this.ibvService.setUpResources(resources);
      });
  }  
}
