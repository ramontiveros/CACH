import { Component, OnInit } from '@angular/core';
import { FirebaseService, FirebaseArray } from 'ng2-firebase/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    barProgress: number;
    buttonDisabled: boolean;
    uploading = false;
    constructor(private firebaseService: FirebaseService<Video>,
                private router: Router) {}

    ngOnInit() { }

    onSubmit(video: Video) {
      this.buttonDisabled = true;
      let component = this;

      let newRef = firebase.database().ref().child('videos').push(video),
            key = newRef.key,
            fileRef = firebase.storage().ref().child('videos/' + key + ".mp4"),
            fileData = this.file;
        let uploadTask = fileRef.put(fileData);
        component.uploading = true;

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        function(snapshot) {
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

        }, function() { //callback when success
          component.buttonDisabled = false;
          component.uploading = false;
          component.router.navigateByUrl('/app/videos/view/' + key);
        });
    }

    readFile($event) : void {
        let target = $event.target;
        this.file = target.files[0];
    }
}
