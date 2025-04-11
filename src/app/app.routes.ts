import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { AllnoteComponent } from './allnote/allnote.component';
import { ForgotComponent } from './forgot/forgot.component';
import { NoteComponent } from './note/note.component';

export const routes: Routes = [
    
             {path:'',redirectTo: 'home',pathMatch: 'full'},
            {path:'home',component:HomeComponent},
            {path:'signup',component:SignupComponent},
            {path:'signin',component:SigninComponent},
            {path:'allnote',component:AllnoteComponent},
            {path:'forgot',component:ForgotComponent},
            {path:'note',component:NoteComponent}
        ];
    
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
