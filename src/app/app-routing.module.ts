import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ServiciiComponent } from './servicii/servicii.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'P', component: MainComponent},
  {path: 'About', component: AboutComponent},
  {path:'servicii', component: ServiciiComponent},

 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
