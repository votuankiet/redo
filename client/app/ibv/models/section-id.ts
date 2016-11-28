export class SectionId{
    unitName: string;
    sectionTitle: string;
    
    constructor(unitName: string, sectionTitle: string){
        this.unitName = unitName;
        this.sectionTitle = sectionTitle;
    }

    public toString(){
        return this.unitName + this.sectionTitle;
    }
}