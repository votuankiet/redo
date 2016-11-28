import {SectionCheckbox} from './section-checkbox'
export class UnitCheckbox{
    unitName: string;
    checkboxState: boolean;
    sectionCheckboxes: SectionCheckbox[];

    constructor(unitName: string){
        this.unitName = unitName;
        this.sectionCheckboxes = [];
    }

    addSectionCheckbox(sectionCheckbox: SectionCheckbox){
        this.sectionCheckboxes.push(sectionCheckbox);
    }
}