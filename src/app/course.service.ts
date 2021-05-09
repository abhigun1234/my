import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  headers: HttpHeaders;
  constructor(private httpclient :HttpClient) {
    this.headers = new HttpHeaders();
    this.headers  = this.headers .set('Content-Type', 'application/json; charset=utf-8');
    
   }
  public addUser()

  { 
     alert('postResaturentMenu')
     let data={
      "userId": 1000,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "Welcome"
    }
    const body = JSON.stringify(data);
    let options = {
      headers: this.headers
     }; 
   const url='https://jsonplaceholder.typicode.com/posts/'
   return this.httpclient.post(url,body,options)
   
  }
}
