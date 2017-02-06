import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';//needed if we want to use ngModel?
import { RouterModule }   from '@angular/router';




import {AppRoutingModule} from './app-routing.module';
import {AppComponent}  from './app.component';
import {ExcerciseTypesComponent} from './ex-types/ex-types.component';
import {DefinitionExComponent} from './definition-ex/definition-ex.component';
import {DefinitionExOptComponent} from './definition-ex-opt/definition-ex-opt.component';
import {ToggleableDirective} from './directives/toggleable.directive'

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent, 
    ExcerciseTypesComponent,
    DefinitionExOptComponent,
    DefinitionExComponent,
    ToggleableDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
