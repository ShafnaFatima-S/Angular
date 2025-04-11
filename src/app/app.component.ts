import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {SignupComponent} from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AllnoteComponent } from './allnote/allnote.component';
import { ForgotComponent } from './forgot/forgot.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,SignupComponent,SigninComponent,AllnoteComponent,ForgotComponent,FormsModule,ReactiveFormsModule  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'noteApp';
}
