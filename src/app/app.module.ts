import {​​​​​​​​ NgxSpinnerModule }​​​​​​​​ from"ngx-spinner";
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { DialogModule } from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {MegaMenuModule} from 'primeng/megamenu';
import {CarouselModule} from 'primeng/carousel';
import {ToastModule} from 'primeng/toast';
import {PrimeIcons} from 'primeng/api';

import { GalleryModule } from './gallery/gallery.module';
import { NotAuthorizedComponent } from './shared/not-authorized/not-authorized.component';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    NotAuthorizedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DialogModule,
    ButtonModule,
    MegaMenuModule,
    CarouselModule,
    ToastModule,
    GalleryModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
