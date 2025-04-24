import { CommonModule } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import axios from 'axios';
import { token } from '../app.component';
// import { NoteComponent } from '../note/note.component';

@Component({
  selector: 'app-allnote',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './allnote.component.html',
  styleUrl: './allnote.component.css'
})
export class AllnoteComponent implements OnInit{
  notes: any[] = [];
constructor(private router:Router){}
  ngOnInit(): void {
   
   
    if(token){
      this.fetchNotes();
    }
  }


async note(){
    this.router.navigate(['/note']);
  
}


async fetchNotes(){
  console.log("token=====>",token)
  const url =`http://localhost:8080/getAll`
   console.log("url============>",{url})
   let response= await axios.get(url,{headers: {
    Authorization: `Bearer ${token[0]}`
}})
console.log(response.data)
this.notes=Object.values(response.data.data)
console.log("notes======>",this.notes)
}
    
async trash(){
  console.log("trash token===>",token)
  const url=`http://localhost:8080/last30Days`
  console.log("trash url=======>",url)
  const response=await axios.get(url,{headers:{
    Authorization: `Bearer ${token[0]}`
  }} )
   this.notes=Object.values(response.data.data)
  console.log("trash response=======>",response.data.data)
  
}
async pin(id:string){
  console.log("pinned token----->",token)
  const url=`http://localhost:8080/pin?id=${id}`
  console.log("Pinned url======>",url)
  const response=await axios.get(url,{headers:{
    Authorization: `Bearer ${token[0]}`
  }})
  console.log("pin id:",id)
  console.log("pinned response=======>",response.data)
 this.fetchNotes()

  
}

async archive(id:string){
  console.log("archive token=====>",token)
  const url =`http://localhost:8080/archive?id=${id}`
    console.log("archive url============>",{url})
    let response= await axios.get(url,{headers: {
     Authorization: `Bearer ${token[0]}`
 }})
 console.log("archived id:",id)
 console.log("archived response--------->",response.data)
 this.fetchNotes()
// console.log("click notes======>",this.notes)
}

async delete(id:string){
  console.log("delete token==========>",token)
  const url=`http://localhost:8080/delete/?id=${id}`
  console.log("delete url============>",url)
  let response= await axios.delete(url,{headers:{
    Authorization: `Bearer ${token[0]}`
  }})
  console.log("deleted id--------->",id)
  console.log("deleted response------>",response.data)
  this.fetchNotes()
}

async archivedNotes(){
  console.log("archived token===>",token)
  const url=`http://localhost:8080/getArchive`
  console.log("trash url=======>",url)
  const response=await axios.get(url,{headers:{
    Authorization: `Bearer ${token[0]}`
  }} )
   this.notes=Object.values(response.data.data)
  console.log("trash response=======>",response.data.data)
  
}

async edit(id:string){
  console.log("note token----->",token)
  const url=`http://localhost:8080/get/?id=${id}`
  console.log("single url======>",url)
  const response=await axios.get(url,{headers:{
    Authorization: `Bearer ${token[0]}`
  }})
  console.log("note id:",id)
  console.log("note response=======>",response.data)
  this.router.navigate(['/note',id]);
}

async lock(){
  this.router.navigate(['/lock']);

  
}


// input:any=[{title:'work',description:'complete it',created:'07/04/2025'},
//   {title:'work',description:'complete all szdxfcvh cfvbhjn dcfvbn cfvgbh fvgbh',created:'07/04/2025'},
//   {title:'asdfgh',description:'complete_all',created:'07/04/2025'},
//   {title:'work',description:'complete it',created:'07/04/2025'},
//   {title:'12345',description:'complete all',created:'07/04/2025'},
// ]


}
