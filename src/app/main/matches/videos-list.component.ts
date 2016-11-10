import { Component, OnInit } from '@angular/core';
import { FirebaseService, FirebaseArray } from 'ng2-firebase/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserDataService } from "../user-data.service";
import { Video } from './video.component';

@Component({
  selector: 'content',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit {
  team_id;
  videos: FirebaseArray<Video>;
  constructor(public userData: UserDataService, private firebase: FirebaseService<Video>, private router: Router) {
    this.videos = firebase.child<Video>("videos").asArray();
    console.log(this.videos);
  }

  ngOnInit() {
    this.team_id = this.userData.getActiveTeam();
    console.log(this.team_id);
  }

  goToVideo(id) {
    this.router.navigate(["app/videos/view/" + id]);
  }
}

