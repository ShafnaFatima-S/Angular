import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router:Router){}

   goToSignUp(this: any){
    console.log('received==============>>>')
    this.router.navigate(['/signup']);
   }
  goToSignIn(){
    this.router.navigate(['/signin']);
  }


}
