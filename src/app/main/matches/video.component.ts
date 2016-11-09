import { Component, OnInit } from '@angular/core';
import { FirebaseService, FirebaseArray } from 'ng2-firebase/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'content',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  video: any
  videoService: any;
  videoUrl: any;
  constructor(private firebase: FirebaseService<any>, 
    private domSanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router) {
      let id; 
      this.route.params.forEach((params: Params) => {
        id = params['id']; 
       });

      this.videoService = firebase.child("videos/" + id);
      this.videoService.data.subscribe((d) => {
          console.log(d);
          this.video = d;
          this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(d.video.replace("watch?v=", "v/"));   
      })
    }
  ngOnInit() {
    
  }
  
}

