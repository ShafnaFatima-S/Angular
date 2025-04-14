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
this.notes=Object.values(response.data.data)
console.log("notes======>",this.notes)
}
    

// input:any=[{title:'work',description:'complete it',created:'07/04/2025'},
//   {title:'work',description:'complete all szdxfcvh cfvbhjn dcfvbn cfvgbh fvgbh',created:'07/04/2025'},
//   {title:'asdfgh',description:'complete_all',created:'07/04/2025'},
//   {title:'work',description:'complete it',created:'07/04/2025'},
//   {title:'12345',description:'complete all',created:'07/04/2025'},
// ]


}
