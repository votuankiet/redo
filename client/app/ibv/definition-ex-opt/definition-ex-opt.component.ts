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

    message: string;
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
            let unit = resources[unitName];
            let sections = unit["definition-sections"];
            let unitCheckbox = new UnitCheckbox(unitName, unit.title)
            this.unitCheckboxes.push(unitCheckbox);
            for (let section of sections){
                let title = section.title;
                
                unitCheckbox.addSectionCheckbox(new SectionCheckbox(title));
            }
        }
    };

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
            this.clearMessage();
            this.router.navigate(['/ex-definition']);
        }else{
            this.message = "Please select a word list you want to practice.";
        }
       
    };

    clearMessage(){
        this.message = undefined;
    }
}
