import { Component } from '@angular/core';
import {IbvService} from './services/ibv.service';
import {UserOptionService} from './services/user-opt.service'

@Component({
  selector: 'my-app',
  templateUrl: '/app/ibv/app.component.html',
  providers: [IbvService, UserOptionService]
})
export class AppComponent { }
