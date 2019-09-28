import { Photo } from './../interfaces/photo';
import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import uuid from 'uuidv4';
import { FileContent, readFileContent } from '../read-file-content';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.scss']
})
export class PhotoUploadComponent implements OnInit {

  constructor(private photosService: PhotosService) { }

  ngOnInit() {
  }
  handleFileInput(images: File[]) {
    const imagesCollection = Array.from(images)
    const imagesContent: Array<Promise<FileContent>> =
        imagesCollection.map(file => readFileContent(file))

    const uploadedImages$ = forkJoin(imagesContent).pipe(
        map(imagesSources => {
            const imagesWithSource = imagesCollection.map(
                (image, idx) => ({
                    name: image.name,
                    id: uuid(),
                    url: imagesSources[idx]
                })
            )

            return imagesWithSource;
        }),
    )

    uploadedImages$.subscribe(
        photos => this.photosService.newPhotos$.next(photos),
    )
}
}
