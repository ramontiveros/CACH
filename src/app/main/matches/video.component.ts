import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'content',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  video: any;
  videoUrl: any;
  constructor(private af: AngularFire, 
    private domSanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    let id; 
    this.route.params.forEach((params: Params) => {
      id = params['id']; 
     });

    this.video = this.af.database.object("videos/" + id);
    this.af.database.object("videos/" + id, { preserveSnapshot: true }).subscribe(snapshot => {
      this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(snapshot.val().video.replace("watch?v=", "v/"));
    });
  }
}

