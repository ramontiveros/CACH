import { Component } from '@angular/core';
import { FirebaseService, FirebaseArray } from 'ng2-firebase/core';

@Component({
  selector: 'content',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  videos: FirebaseArray<any>;
  constructor(private firebase: FirebaseService<any>) {
      this.videos = firebase.child<any>("videos").asArray();
   }
}

