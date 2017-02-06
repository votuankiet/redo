import { Component, OnInit  } from '@angular/core';
import {IbvService} from './services/ibv.service';
import {UserOptionService} from './services/user-opt.service'
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: '/app/ibv/app.component.html',
  providers: [IbvService, UserOptionService]
})
export class AppComponent  implements OnInit {
  constructor(private router: Router) {

   }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            document.body.scrollTop = 0;
        });
    }
 }
