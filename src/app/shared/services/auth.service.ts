import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


 isLoggedIn=false;
  constructor(public firebaseAuth:AngularFireAuth,private http:HttpClient) { }
  // SignIn with email and password
  async singin(email:string,password:string){
   await this.firebaseAuth.signInWithEmailAndPassword(email,password)
   .then(res=>{
      this.isLoggedIn=true;
      localStorage.setItem('user',JSON.stringify(res.user));
      alert('User Logged In SuccessFully')
    }).catch(err=>{
      alert('Record Not Found')
    })
  }

  async singup(email:string,password:string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
       this.isLoggedIn=true;
       localStorage.setItem('user',JSON.stringify(res.user));
       alert('User Created SuccessFully')
     }).catch(err=>{
        alert('User Already Exsist')
      })
   }
   logout(){
     this.isLoggedIn=false;
      localStorage.removeItem('user');
   }


}