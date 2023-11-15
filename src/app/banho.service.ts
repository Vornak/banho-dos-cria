import { Injectable } from '@angular/core';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BanhoService {
  // firebaseConfig = {
  //   apiKey: "AIzaSyDhYog0e2_Cj1LziZnC13IylgiFL7g3e_U",
  //   authDomain: "banhocrias.firebaseapp.com",
  //   projectId: "banhocrias",
  //   storageBucket: "banhocrias.appspot.com",
  //   messagingSenderId: "644152712581",
  //   appId: "1:644152712581:web:cec6b93489e65fcbc4f8ec",
  //   measurementId: "G-6B3CQ1VJXF"
  // };
  
  // // Initialize Firebase
  // app = initializeApp(this.firebaseConfig);
  // analytics = getAnalytics(this.app);

  constructor() { }



  private readonly API = '/banho'



}
