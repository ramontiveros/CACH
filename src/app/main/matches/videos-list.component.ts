import { Component, OnInit } from '@angular/core';
/*import { AngularFire, FirebaseListObservable } from 'angularfire2';*/
import { Router, ActivatedRoute, Params } from '@angular/router';
import {UserDataService} from "../user-data.service";

@Component({
  selector: 'content',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit{
  /*
  team_id;
  videos: FirebaseListObservable<any[]>;
  constructor(public userData: UserDataService ,af: AngularFire, private router: Router) {
    this.videos = af.database.list('/videos');
  }

  ngOnInit() {
    this.team_id = this.userData.getActiveTeam();
    console.log(this.team_id);
  }

  goToVideo(id) {
    this.router.navigate(["app/videos/" + id]);
  }
  */
  ngOnInit() {
  }

}

