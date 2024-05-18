import { Camera, CameraResultType } from '@capacitor/camera';
import { PhotoService } from '../services/photo.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public photoService: PhotoService) {}

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    var imageUrl = image.webPath;
    // imageElement.src = imageUrl;
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}