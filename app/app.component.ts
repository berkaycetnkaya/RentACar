import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

 dataload=false;
 /**
  *
  */
 constructor(private router:Router) {


 }

  ngOnInit(): void {
    this.ıfPageIsCars();

  }
  title = 'RentACar';

ıfPageIsCars(){
  let currentRoute = this.router.getCurrentNavigation.name
  console.log(currentRoute + "burada")
  if(currentRoute==="/cars"){

    return this.dataload=true;
  }
  else{
    return this.dataload=false;
  }

}

}
