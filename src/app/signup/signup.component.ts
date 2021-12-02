import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../shared/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm !: FormGroup;
  isSignedIn=false;
  constructor(private formBuilder:FormBuilder,
    private http: HttpClient, private router:Router,public firebaseService:FirebaseService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullName:['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      mobile: ['',Validators.required],
    });
    if(localStorage.getItem('user')!==null)
    this.isSignedIn=true;
  else
    this.isSignedIn=false;
  }
//   get f(){
//     return this.signupForm.controls;
//   }

//   signUp(){
//     this.http.post<any>('http://localhost:3000/signUpUsers',this.signupForm.value)
//     .subscribe(res=>{
//       alert("SignUp SuccessFully")
//       this.signupForm.reset();
//       this.router.navigate(['login']);
//   },err=>{
//     alert('Something went wrong')
//   })


// }

async onSignUp(){
  await this.firebaseService.singup(this.signupForm.value.email,this.signupForm.value.password)
  if(this.firebaseService.isLoggedIn){
    this.isSignedIn=true;
    this.router.navigate(['/']);
  }
}
}



