import { Component } from '@angular/core';
import { Router} from '@angular/router';

import {IbvService} from '../services/ibv.service'
import {UserOptionService} from '../services/user-opt.service'
import {UnitCheckbox} from './unit-checkbox'
import {SectionCheckbox} from './section-checkbox'
import {SectionId} from '../models/section-id'
import {DefinitionOption} from '../models/definition-opt'


@Component({
  selector: 'definition-ex-opt',
  templateUrl: '/app/ibv/definition-ex-opt/definition-ex-opt.component.html'
})
export class DefinitionExOptComponent {


    unitCheckboxes: UnitCheckbox[];// all unit check boxes

    constructor(private router: Router, private ibvService: IbvService,
        private userOptionService: UserOptionService){

        this.ibvService.redirectIfResourceNotLoaded();

        this.createOptions();
    }

    private createOptions(){
        this.unitCheckboxes = [];//clear all data 
        let resources = this.ibvService.getResources();
        for (let unitName in resources){
            let sections = resources[unitName];
            let unitCheckbox = new UnitCheckbox(unitName)
            this.unitCheckboxes.push(unitCheckbox);
            for (let section of sections){
                let title = section.title;
                
                unitCheckbox.addSectionCheckbox(new SectionCheckbox(title));
            }
        }
    }

    start(){
        let definitionOpt = new DefinitionOption();
        for (let unitCheckbox of this.unitCheckboxes){
            for (let sectionCheckbox of unitCheckbox.sectionCheckboxes){
                if (sectionCheckbox.selected === true){
                    let sectionId = new SectionId(unitCheckbox.unitName, sectionCheckbox.sectionTitle);
                    definitionOpt.addSelectedSection(sectionId);
                }
            }
        }

        if (definitionOpt.getSelectedSections().length > 0){
            this.userOptionService.setDefinitionOption(definitionOpt);
            this.router.navigate(['/ex-definition']);
        }
       
    }
}
