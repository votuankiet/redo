import {SectionId} from './section-id'
export class DefinitionOption{
    private selectedSections: SectionId[];

    constructor(){
        this.selectedSections = [];
    }

    addSelectedSection(sectionId: SectionId){
        this.selectedSections.push(sectionId);    
    }

    isSectionSelected(unitName: string, sectionTitle: string){
        for (let selectedSection of this.selectedSections){
            console.log(unitName, sectionTitle, selectedSection.unitName, selectedSection.sectionTitle);
            if (selectedSection.unitName === unitName && selectedSection.sectionTitle === sectionTitle){
                return true;
            }
        }

        return false;
    }

    getSelectedSections(){
        return this.selectedSections;
    }
}