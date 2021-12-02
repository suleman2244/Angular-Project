import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class NetworkInterceptor implements HttpInterceptor {

  constructor(private http:HttpClient,private auth:LoginComponent) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(this.auth.token);
    request = request.clone({

      setHeaders:{

        Authorization: ` ${this.auth.token}`,


      }

    })
    return next.handle(request)
  }
}
