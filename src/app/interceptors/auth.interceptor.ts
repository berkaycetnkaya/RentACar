import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}
// request : post işlemini yapmanız buna istek diyoruz
// next : bu bir interceptor ya requestıne dur ben bir paket koyacam oyle gideceksin diyor
//autherization headers koyuyoruz
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token= localStorage.getItem("token");
    let newRequest : HttpRequest<any>;

    newRequest=request.clone({
      headers : request.headers.set("Authorization","Bearer" + token)
    })
    return next.handle(newRequest);
  }
}


//Error handler yazabilirsin burada frontendde
