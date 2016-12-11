import {SectionCheckbox} from './section-checkbox'
export class UnitCheckbox{
    unitName: string;
    title: string;
    checkboxState: boolean;
    sectionCheckboxes: SectionCheckbox[];

    constructor(unitName: string, title: string){
        this.unitName = unitName;
        this.title = title;
        this.sectionCheckboxes = [];
        
    }

    addSectionCheckbox(sectionCheckbox: SectionCheckbox){
        this.sectionCheckboxes.push(sectionCheckbox);
    }
}