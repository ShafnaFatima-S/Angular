import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { token } from '../app.component';
import axios from 'axios';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent implements OnInit {
  dataForm: FormGroup;
  NoteId: string | null = null;
  data:any=[]
constructor(private router:Router,public formBuilder:FormBuilder,private route: ActivatedRoute, ){
  this.dataForm =this.formBuilder.group({
    title:[''],
    categories:[''],
    description:[''],
    id:['']
  },
  
)
}
  ngOnInit(): void {
    this.NoteId = this.route.snapshot.paramMap.get('id');
    console.log("note id received------>",this.NoteId)
    
    if (this.NoteId) {
      this.loadNote(this.NoteId);
    }
  }

 async loadNote(id: string) {
   
    try {
      const url=`http://localhost:8080/get/?id=${id}`
      console.log("single url======>",url)
      const response=await axios.get(url,{headers:{
        Authorization: `Bearer ${token[0]}`
      }})
      // console.log(response.data.data)
      const res=response.data.data
    this.dataForm.patchValue({
       title:res.title,
       categories:res.categories,
       description:res.description,
       id:res.id
    })
    const formdata=this.dataForm.value
    
    
    console.log("formdata-------->",formdata)
    } catch (err) {
      console.error('Fail')
  }
}

async update(){

  
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
const formdata=this.dataForm.value
const formId=formdata.id
console.log("formId---->",formId)
if(formId!==null){
  const title=this.dataForm.get('title')?.value;
  const description=this.dataForm.get('description')?.value;
  const categories=this.dataForm.get('categories')?.value;
  const id=formdata.id
  console.log({title,categories,description,id})
  const data={id,title,categories,description}
  console.log("data----------->",data)
  const url =`http://localhost:8080/update`
     console.log("url============>",{url})
     let response= await axios.put(url,data,{headers: {
      Authorization: `Bearer ${token[0]}`
  }})
  console.log("update notes===>",response.data)
  this.router.navigate(['/allnote']);
}

else{
  const url =`http://localhost:8080/createNotes`
  console.log("url============>",{url})
  let response= await axios.post(url,data,{headers: {
   Authorization: `Bearer ${token[0]}`
}})
console.log("create notes===>",response)
this.router.navigate(['/allnote']);
}
}



}
