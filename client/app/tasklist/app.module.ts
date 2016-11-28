import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';//needed if we want to use ngModel?


import {AppComponent}  from './app.component';
import {TasksComponent} from './components/tasks/tasks.component'
@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [AppComponent, TasksComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
