import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private Mat:MatDialog){}

AddQuestion(){

  this.Mat.open(PopUpComponent)
}

}
