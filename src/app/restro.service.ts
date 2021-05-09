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
<<<<<<< HEAD
   const url='http://192.168.43.1:8080/getMenuDetails/addmenu/'
=======
   const url='http://192.168.1.102:5000/addmenu/'
>>>>>>> 1bf20937e49a6a2726f5d86b55d2b482515b6030
   return this.httpclient.post(url,body,options)
   
  }
}
