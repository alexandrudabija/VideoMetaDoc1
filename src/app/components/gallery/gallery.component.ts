import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less']
})
export class GalleryComponent {


galleryImg:any = [


  {

id:1,
img:"./assets/images/gallery/v5.jpg"


}

,
{

  id:2,
  img:"./assets/images/gallery/v4.jpg"


  }

,

  {

    id:3,
    img:"./assets/images/gallery/v3.jpg"


    }






]

}
