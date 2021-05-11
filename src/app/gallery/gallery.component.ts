import { Component, OnInit } from '@angular/core';
import { GalleryImgs} from './gallery.model'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images : any= GalleryImgs;
  responsiveOptions
  displayCustom: boolean;
  activeIndex: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.responsiveOptions= [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];
  }
 

    imageClick(index: number) {
        this.activeIndex = index;
        this.displayCustom = true;
    }

}
