import { Component, OnInit } from '@angular/core';
import { FirebaseService, FirebaseArray } from 'ng2-firebase/core';
import { Video } from './video.component';
import { Router } from '@angular/router';


declare var firebase;

@Component({
    selector: 'create',
    templateUrl: 'video-create.component.html',
    styleUrls: ['video-create.component.css']
})
export class VideoCreateComponent implements OnInit {
    file: File;
    duration: number;
    stringDuration: string;
    barProgress: number;
    buttonDisabled: boolean;
    uploading = false;
    constructor(private firebaseService: FirebaseService<Video>,
                private router: Router) {}

    ngOnInit() { }

    onSubmit(video: Video) {
      this.buttonDisabled = true;
      let component = this;
      video.length = this.stringDuration;
      console.log(video.length);

      let newRef = firebase.database().ref().child('videos').push(video),
            key = newRef.key,
            fileRef = firebase.storage().ref().child('videos/' + key + ".mp4"),
            fileData = this.file;
      console.log("entry created");
        let uploadTask = fileRef.put(fileData);
        console.log('upload task with put created');
        component.uploading = true;

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        function(snapshot) {
        //TODO Si el internet se va, esta funcion solo se corre una vez y no lanza un error
        console.log("uplaod state changed");
          component.barProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        }, function(error) { //callback when error
          switch (error.code) {
            case 'storage/unauthorized':
              console.log("unauthorized");
              break;
            case 'storage/canceled':
              console.log("upload canceled");
              break;
            case 'storage/unknown':
              console.log("something bad happened");
              break;
          }
          component.buttonDisabled = false;

        },
        function() { //callback when success
          component.buttonDisabled = false;
          component.uploading = false;
          component.router.navigateByUrl('/app/videos/view/' + key);
        });
    }

    readFile($event) : void {
      let component = this;
      let target = $event.target;
      component.file = target.files[0];
      let videoElem = document.createElement('video');
      videoElem.preload = 'metadata';
      videoElem.onloadedmetadata = function() {
        window.URL.revokeObjectURL(this.src);
        component.duration = videoElem.duration;
        let date = new Date(null);
        date.setSeconds(component.duration);
        component.stringDuration = date.toISOString().substr(11, 8);
      };

      videoElem.src = URL.createObjectURL(component.file);




    }



}
