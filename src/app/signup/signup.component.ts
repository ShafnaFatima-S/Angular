import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';
import { token } from '../app.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  SignUpForm: FormGroup;
constructor(private router:Router,public formBuilder:FormBuilder){
  this.SignUpForm =this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],
      
    },
    
  )
}
 async signIn(){


    const username=this.SignUpForm.get('username')?.value;
    const password=this.SignUpForm.get('password')?.value;
    const url =`http://localhost:3000/createUser/?username=${username}&password=${password}`
    console.log("archive url============>",{url})
    let response= await axios.post(url)
    console.log("response----------->",response.data)
    const  data=response.data
    if (this.SignUpForm.valid) {
      alert(`Form Submitted Successfully`);
      this.router.navigate(['/signin']);
    } else {
      alert('Please check the form for errors');
    }
    
  }

hasError(controlName: string, errorName: string) {
  return (
      this.SignUpForm.get(controlName)?.hasError(errorName) &&
      this.SignUpForm.get(controlName)?.hasError(errorName)
  );
      
}
}
