import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../interfaces/photo';
import { PhotosService } from '../services/photos.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  @Input() photo: Photo ;
  constructor(private photosService: PhotosService) { }

  ngOnInit() {
  }
onPhotoClick(id: string): void {
  this.photosService.activePhotoID$.next(id);
}
}
