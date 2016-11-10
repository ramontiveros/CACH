import { Component, OnInit } from '@angular/core';
import { FirebaseService, FirebaseArray } from 'ng2-firebase/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { Router, ActivatedRoute, Params } from '@angular/router';

declare var firebase;

@Component({
  selector: 'content',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  video: any
  videoService: FirebaseService<Video>;
  videoUrl: any;
  constructor(private af: FirebaseService<Video>, 
    private domSanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router) {
      let id, videoRef, component = this;

      //get the video id from the URL
      this.route.params.forEach((params: Params) => {
        id = params['id']; 
       });
      
      // obtain the references
      this.videoService = af.child<Video>("videos/" + id);
      videoRef = firebase.storage().ref().child("videos/" + id + ".mp4");

      //load the video from the global firebase object
      //component var is used since the videoRef exists outside of this context
      videoRef.getDownloadURL().then(function(url) {
        component.videoUrl = component.domSanitizer.bypassSecurityTrustResourceUrl(url);   
      }).catch(function(error) {
        console.error("Error getting video URL!", error);
      });

      //Subscribe to the video data
      this.videoService.data.subscribe((d) => {
          this.video = d;
          
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

