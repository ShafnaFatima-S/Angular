import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { token } from '../app.component';
import axios from 'axios';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent {
  dataForm: FormGroup;
  
  
constructor(private router:Router,public formBuilder:FormBuilder){
  this.dataForm =this.formBuilder.group({
    title:[''],
    categories:[''],
    description:['']
  },
  
)
}

allNote(){
  this.router.navigate(['/allnote']);
}
async details(){
const title=this.dataForm.get('title')?.value;
const description=this.dataForm.get('description')?.value;
const categories=this.dataForm.get('categories')?.value;
console.log({title,categories,description})
const data={title,categories,description}
console.log("data----------->",data)
const url =`http://localhost:8080/createNotes`
   console.log("url============>",{url})
   let response= await axios.post(url,data,{headers: {
    Authorization: `Bearer ${token[0]}`
}})
console.log("create notes===>",response)
this.router.navigate(['/allnote']);
}
async pin(){
  const pin=true;
  
  
 }

}
