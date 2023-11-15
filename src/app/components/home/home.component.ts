import { Component } from '@angular/core';
import { BanhoService } from 'src/app/banho.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  qtd!:number
  
  banhoService = new BanhoService








}
