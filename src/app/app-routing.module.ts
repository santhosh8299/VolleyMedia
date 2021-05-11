import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotAuthorizedComponent } from './shared/not-authorized/not-authorized.component';

const routes: Routes = [{
  path: 'home', component: HomeComponent
},
{ path: 'about', component: AboutComponent },
{ path: 'gallery', loadChildren: './gallery/gallery.module#GalleryModule' },
{ path: 'login', component:LoginComponent},
{ path : 'not-authorized', component: NotAuthorizedComponent},
{ path: '', redirectTo: '/home' , pathMatch: 'full'},
{ path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
