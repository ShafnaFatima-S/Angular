import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-lock',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './lock.component.html',
  styleUrl: './lock.component.css'
})
export class LockComponent {
lockForm: FormGroup;
constructor(private router:Router,public formBuilder:FormBuilder,){
  this.lockForm =this.formBuilder.group({
      password:['',Validators.required],
})
}
log(){
  if (this.lockForm.valid) {
    alert(`Form Submitted Successfully`);
    
  } else {
    alert('Please check the form for errors');
  }
}
hasError(controlName: string, errorName: string) {
  return (
      this.lockForm.get(controlName)?.hasError(errorName) &&
      this.lockForm.get(controlName)?.hasError(errorName)
  );
}
async lock(){
  const password=this.lockForm.get('password')?.value;
  const url=`http://localhost:8080/lock`
  console.log("lock url============>",{url})
     const response= await axios.post(url,password)
      console.log("lock response----------->",response.data)
      const  data=response.data

      this.router.navigate(['/allnote'])
    
}
}
