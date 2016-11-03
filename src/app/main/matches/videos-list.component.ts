import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'content',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent {
  videos: FirebaseListObservable<any[]>;
  constructor(af: AngularFire, private router: Router) {
    this.videos = af.database.list('/videos');
  }

  goToVideo(id) {
    this.router.navigate(["app/videos/" + id]);
  }
}

