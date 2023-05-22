import { Component, Input, OnInit } from '@angular/core';
import{programari} from'../models/programari';
import { ProgramariServiceService } from '../services/programari-service.service';

import { doc, setDoc, getDoc} from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
  
})
export class MainComponent  {
ShowSendBtn: boolean=false;


showSendBtn():void{
  this.ShowSendBtn=true;

}

  constructor(){
   
  }

  
  



  
    public async  getData(){

      

      const app = initializeApp(environment.firebase);
      const db = getFirestore(app);
      
const docRef = doc(db, "programari", "programari");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}

console.log("am intrat in functie");

const nume = (document.getElementById('nume') as HTMLInputElement).value;
const email = (document.getElementById('email') as HTMLInputElement).value;
const telefon = (document.getElementById('telefon') as HTMLInputElement).value;
const data = (document.getElementById('data') as HTMLInputElement).value;
const model = (document.getElementById('model') as HTMLInputElement).value
const serviciu = (document.getElementById('serviciu') as HTMLInputElement).value;

await setDoc(doc(db, "programari", nume), {
  name: nume,
  telefon: telefon,
  email: email,
  data: data,
  serviciu:serviciu,
  model: model
});
    }

}