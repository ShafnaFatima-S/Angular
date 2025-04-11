import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
    cat:[''],
    description:['']
  },
  
)
}
input:any=[];
allNote(){
  this.router.navigate(['/allnote']);
}
details(){

const title=this.dataForm.get('title')?.value;
const description=this.dataForm.get('description')?.value;
const cat=this.dataForm.get('cat')?.value;
this.input.push({title,cat,description})
console.log(this.input)
this.router.navigate(['/allnote']);
}


}
