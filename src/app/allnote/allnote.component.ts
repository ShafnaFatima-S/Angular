import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
// import { NoteComponent } from '../note/note.component';

@Component({
  selector: 'app-allnote',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './allnote.component.html',
  styleUrl: './allnote.component.css'
})
export class AllnoteComponent {
constructor(private router:Router){}


async note(){
 
    // let response={{data}}
    // const url =`http://localhost:8080/getAll`
    // console.log("url============>",{url})
    // let response= await axios.get(url)
    this.router.navigate(['/note']);
  
}
input:any=[{title:'work',description:'complete it',created:'07/04/2025'},
  {title:'work',description:'complete all szdxfcvh cfvbhjn dcfvbn cfvgbh fvgbh',created:'07/04/2025'},
  {title:'asdfgh',description:'complete_all',created:'07/04/2025'},
  {title:'work',description:'complete it',created:'07/04/2025'},
  {title:'12345',description:'complete all',created:'07/04/2025'},
]


}
