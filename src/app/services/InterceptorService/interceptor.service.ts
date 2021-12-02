import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  readonly API_URL = "http://localhost:3001";


  constructor(private http: HttpClient) { }



  signIn()

  {

    return this.http.get<any>(this.API_URL + '/token/sign');

  }

  getPath()

  {

    return this.http.get<any>(this.API_URL + '/path1');

  }
}
