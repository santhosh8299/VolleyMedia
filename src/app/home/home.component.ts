import { Component, OnInit } from '@angular/core';
import { GalleryImgs } from '../gallery/gallery.model'
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products = GalleryImgs.filter(a=>a.id<7)
  heading:string 

  responsiveOptions: { breakpoint: string; numVisible: number; numScroll: number; }[];
  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.loginDetailsSubject.subscribe(data => {
      if(data){
        this.heading = "Full tutorial will be in gallery section"
      }
      else{
        this.heading = "Please login to view the full gallery"
      }
    })
    if(sessionStorage.getItem('userDetails')){
      this.heading = " Full tutorial will be in gallery section"
    }else{
      this.heading = "Please login to view the full gallery"
    }
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

}
