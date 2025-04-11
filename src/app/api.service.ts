import { Injectable } from '@angular/core';
import  axios  from 'axios';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  async login(data:any){
    const response=axios.post('http://localhost:3000/logIn')
    
    console.log("response----------->",response)
  }
}
