import { Component } from '@angular/core';
import {FirebaseService} from 'ng2-firebase/core';

@Component({
  selector: 'app-root',
  template: 'hai'
})
export class AppComponent{
  constructor(private firebase: FirebaseService<any>) {
  }
}

