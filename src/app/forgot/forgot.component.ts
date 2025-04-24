import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators ,FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';


@Component({
  selector: 'app-forgot',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.css'
})

export class ForgotComponent {
 passwordForm: FormGroup;

  constructor(private router:Router,public formBuilder:FormBuilder){
    this.passwordForm = this.formBuilder.group({
      createPassword:['',[Validators.required,
                    Validators.maxLength(15),
                    Validators.minLength(6)
      ],
    ],
    confirmPassword:['',Validators.required],
    username:['',Validators.required],
    },
  {validator:this.passwordMatchValidator}
);

  }
  passwordMatchValidator(form:FormGroup){
    const password=form.get('createPassword')?.value;
    const confirmPass=form.get('confirmPassword')?.value;
    if(password !== confirmPass){
        // alert('incorrect password')
      return { passwordMismatch: true };
     
    }
    return null;
  }

password:any;

  // show = false;
password1() {
    if (this.password === 'password') {
      this.password = 'text';
      // this.show = true;
    } else {
      this.password = 'password';
      // this.show = false;
    }
  }
  pass() {
    
    if (this.password === 'password') {
      this.password = 'text';
      // this.show = true;
    } else {
      this.password = 'password';
      // this.show = false;
    }
  }



async forgot(){
  if (this.passwordForm.valid) {
    alert(`Form Submitted Successfully`);
    const username=this.passwordForm.get('username')?.value;
  const password=this.passwordForm.get('createPassword')?.value;
  
  const url=`http://localhost:3000/forgot?username=username&password=password`
  const response=await axios.put(url)
  console.log("forgot response---------->",response.data)
  this.router.navigate(['/signin']);
  
} else {
    alert('Please check the form for errors');
}
  
}

hasError(controlName: string, errorName: string) {
  return (
      this.passwordForm.get(controlName)?.hasError(errorName) &&
      this.passwordForm.get(controlName)?.touched
  );
}

  

}