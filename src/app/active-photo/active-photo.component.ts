import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Photo } from '../interfaces/photo';
import { PhotosService } from '../services/photos.service';

@Component({
  selector: 'app-active-photo',
  templateUrl: './active-photo.component.html',
  styleUrls: ['./active-photo.component.scss']
})
export class ActivePhotoComponent implements OnInit {
   photo: Photo

  photoSubscription: Subscription =
      this.photosService.activePhoto$.subscribe(photo => {
          this.photo = photo
      })
  constructor(private photosService: PhotosService) { }

  ngOnInit() {
  }
  hidePhoto() {
    this.photosService.activePhotoID$.next(this.photosService.noPhotoID);
}
ngOnDestroy() {
  this.photoSubscription.unsubscribe()
}
}
