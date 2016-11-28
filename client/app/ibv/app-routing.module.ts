import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {ExcerciseTypesComponent} from './ex-types/ex-types.component';
import {DefinitionExOptComponent} from './definition-ex-opt/definition-ex-opt.component'
import {DefinitionExComponent} from './definition-ex/definition-ex.component'

const routes: Routes = [
  { path: '', redirectTo: '/ex-types', pathMatch: 'full' },
  { path: 'ex-types',  component: ExcerciseTypesComponent },
  { path: 'ex-definition-opt', component: DefinitionExOptComponent},
  { path: 'ex-definition', component: DefinitionExComponent },
];

@NgModule({
  // imports: [ RouterModule.forRoot(routes) ], // PathLocationStrategy - the default "HTML 5 pushState" style.
  imports: [ RouterModule.forRoot(routes, { useHash: true })],//HashLocationStrategy - the "hash URL" style.
  exports: [ RouterModule ]
})
export class AppRoutingModule {}