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
  videoService: FirebaseService<Video>;
  videoUrl: any;
  constructor(private firebase: FirebaseService<Video>, 
    private domSanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router) {
      let id; 
      this.route.params.forEach((params: Params) => {
        id = params['id']; 
       });
      this.videoService = firebase.child<Video>("videos/" + id);
      this.videoService.data.subscribe((d) => {
          this.video = d;
          this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(d.video.replace("watch?v=", "v/"));   
      });
  }
  ngOnInit() {
    
  }
  
}

export class Video {
  date: string;
  length: string;
  observations: any;
  test: string;
  title: string;
  video: string;  
}

