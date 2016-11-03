import { Component } from '@angular/core';
import {AngularFire} from "angularfire2";

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(af: AngularFire) {
    af.auth.subscribe(auth => {
      if(auth) {
        console.log('logged in');
      } else {
        console.log('not logged in');
      }
    });
  }
}

