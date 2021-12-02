import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { async } from '@firebase/util';
import { InterceptorService } from '../services/InterceptorService/interceptor.service';
import { FirebaseService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public loginForm !: FormGroup;
 token:string="";
 @Output() isLogout=new EventEmitter<void>();
isSignedIn=false;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:
    Router,
    private interceptor:InterceptorService,public firebaseService:FirebaseService) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')!==null)
      this.isSignedIn=true;
    else
      this.isSignedIn=false;



    this.loginForm = this.formBuilder.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    });
  }
  async onSignIn(){
    await this.firebaseService.singin(this.loginForm.value.email,this.loginForm.value.password)
    if(this.firebaseService.isLoggedIn){
      this.isSignedIn=true;
      this.interceptor.signIn().subscribe((data) =>{
      this.token =  data.headers.Authorization;
      console.log(this.token);
       })
      this.router.navigate(['home']);

    }
    else{
      alert('Record Not Found')
    }


  }
  // get f(){
  //   return this.loginForm.controls;
  // }
  // login(){

  //   this.http.get<any>('http://localhost:3000/signUpUsers')
  //   .subscribe(res=>{
  //   const user=res.find((a:any)=>{
  //     return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password;
  //   });
  //   if(user){
  //     alert('Login Successfully');
  //     this.loginForm.reset();
  //     this.interceptor.signIn().subscribe((data) =>{

  //       this.token =  data.headers.Authorization;

  //       console.log(this.token);
  //     })

  //     this.router.navigate(['home']);
  //   }else{
  //     alert('User Not Found');
  //   }
  //   },err=>{
  //     console.log(err);
  //     alert('Something went wrong')
  //   })

  // }
  logout_two(){
    this.isSignedIn=false;

   }

   logout(){
    this.firebaseService.logout();
    this.isLogout.emit();
  }




}
