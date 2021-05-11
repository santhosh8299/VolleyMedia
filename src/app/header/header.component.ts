import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';
import { headerDetails } from './header.model'
import { UserDetails } from '../login/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userDetails: UserDetails
  userImgSrc: string;
  volleyLogoImgSrc: string;
  showLoginDialog: boolean = false;
  menuList;
  constructor(private headerService: HeaderService,
    private router: Router) { }

  ngOnInit(): void {
    this.headerService.loginDetailsSubject.subscribe(data => {
      if(data){
        this.userDetails = JSON.parse(sessionStorage.getItem('userDetails'))
        this.menuList = headerDetails
      }
      else{
        this.userDetails = null;
        this.menuList = headerDetails.filter(a=>['Home','About'].indexOf(a.label)!== -1)
      }
      
    })
    if(sessionStorage.getItem('userDetails')){
      this.userDetails = JSON.parse(sessionStorage.getItem('userDetails'))
      this.menuList = headerDetails
    }else{
      this.menuList = headerDetails.filter(a=>['Home','About'].indexOf(a.label)!== -1)
    }

  }
  onLogOut(){
    sessionStorage.removeItem('userDetails')
    this.headerService.loginDetailsSubject.next(false)
    this.router.navigate(['/','home'])
  }
  onLogin(){
    this.headerService.loginSubject.next(true)
  }
}
