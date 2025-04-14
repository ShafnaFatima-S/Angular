import { CommonModule } from '@angular/common';
import { Token } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';
import { token } from '../app.component';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})

export class SigninComponent {
  loginForm: FormGroup;
constructor(private router:Router,public formBuilder:FormBuilder,){
  this.loginForm =this.formBuilder.group({
    username:['',Validators.required],
    password:['',Validators.required],
    
  },
  
)
}
  // token:any=[]

  log(){
    if (this.loginForm.valid) {
      alert(`Form Submitted Successfully`);
      
    } else {
      alert('Please check the form for errors');
    }
  }
  
hasError(controlName: string, errorName: string) {
  return (
      this.loginForm.get(controlName)?.hasError(errorName) &&
      this.loginForm.get(controlName)?.hasError(errorName)
  );
}
async allNote(){

    const username=this.loginForm.get('username')?.value;
    const password=this.loginForm.get('password')?.value;
    const url =`http://localhost:3000/logIn/?username=${username}&password=${password}`
    console.log("url============>",{url})
     const response= await axios.get(url)
      console.log("response----------->",response.data)
      const  data=response.data
      if(data.status=="ERROR"){
        alert("Invalid username and password!")
        
      }
      token.push(data.token); 
        // this.token.push(data.token)
        console.log("token------>",data.token)
        console.log("token------>>>",token)

        this.router.navigate(['/allnote'])
      
}




forgot(){
  this.router.navigate(['/forgot'])
}
}
