import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';


import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatMenu, MatMenuModule} from '@angular/material/menu';
import { FirestoreModule, provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FirebaseAppModule, initializeApp, provideFirebaseApp } from '@angular/fire/app';




import {MatInputModule} from '@angular/material/input';



import{FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiciiComponent } from './servicii/servicii.component'
import { environment } from 'src/environments/environment.development';

@NgModule({

  

  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    AboutComponent,
    ServiciiComponent 
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatMenuModule,
    FirestoreModule,
    FirebaseAppModule,
    provideFirebaseApp(()=>initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
