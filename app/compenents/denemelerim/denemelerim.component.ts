import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-denemelerim',
  templateUrl: './denemelerim.component.html',
  styleUrls: ['./denemelerim.component.css']
})
export class DenemelerimComponent implements OnInit {

show = true;

  constructor() {


  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
isResultTrue(){
  let a =localStorage.getItem("token")
  if(a.length>0){
    this.show=false;
    console.log(a)
  }

}

}
