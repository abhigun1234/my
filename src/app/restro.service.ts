import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RestroService {
  headers: HttpHeaders;
  constructor(private httpclient :HttpClient) { 

    this.headers = new HttpHeaders();
    this.headers  = this.headers .set('Content-Type', 'application/json; charset=utf-8');
  
  }


  /*
   posting restaurent menu to backend api  
  */

  public postResaturentMenu(data:any)
  {  alert('postResaturentMenu')
    const body = JSON.stringify(data);
    let options = {
      headers: this.headers
     }; 
   const url='https://justolearnapp.herokuapp.com/api/addproduct'
   return this.httpclient.post(url,body,options)
   
  }
}
