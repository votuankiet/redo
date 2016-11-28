export class SectionCheckbox{
    sectionTitle: string;
    selected: boolean;

    constructor(sectionTitle: string){
        this.sectionTitle = sectionTitle;
        this.selected = false;
    }
}