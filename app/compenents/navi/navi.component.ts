import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  /**
   *
   */
data=false;

  constructor(private authService:AuthService,private toastrService:ToastrService,private router:Router)  {


  }



  ngOnInit(): void {
    this.isLoginOrNot()

  }
  isLoginOrNot(){
    let a = localStorage.getItem("token");
    console.log(a.length)
    console.log(a)
    if(a===localStorage.getItem("token")){
      this.data=true
    }
    else(
      this.data
    )

  }

  logOff(){
    localStorage.removeItem("token");
    this.toastrService.error("Çıkış yaptınız.")
    this.data=false
  }

}
