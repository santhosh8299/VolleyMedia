
import { GalleryComponent } from './gallery.component';


import {CardModule} from 'primeng/card';
import { CommonModule } from '@angular/common';
import {GalleriaModule} from 'primeng/galleria';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';


@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    GalleriaModule,
    RouterModule.forChild([
      { path: '', component: GalleryComponent, canActivate: [AuthGuard] }
    ]),
  ],
  providers: [],
  exports:[]
})
export class GalleryModule { }
