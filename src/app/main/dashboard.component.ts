import { Component } from '@angular/core';
import { FirebaseService } from 'ng2-firebase/core';
/*import { AngularFire, FirebaseListObservable } from 'angularfire2';*/

@Component({
  selector: 'content',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private firebase: FirebaseService<any>) { }
  /*
  items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.items = af.database.list('/videos/video1');
  }
    */
}

