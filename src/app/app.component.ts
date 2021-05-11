import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'media';
  constructor(
    private router: Router,
    private spinner: NgxSpinnerService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.spinner.show()
      }
      if (event instanceof (NavigationEnd || NavigationCancel || NavigationError)) {
        this.spinner.hide()
      }
    })
  }

}
