import { Component, OnInit } from '@angular/core';
import {RestroService} from '..//restro.service'
@Component({
  selector: 'app-postrestaurentment',
  templateUrl: './postrestaurentment.component.html',
  styleUrls: ['./postrestaurentment.component.css']
})
export class PostrestaurentmentComponent implements OnInit {

  constructor(private restro:RestroService) { }

  ngOnInit() {
  }

 public postdata(data :any)
  {  
     this.restro.postResaturentMenu(data).subscribe(res=>{

      console.log(res)
     },error=>{

      alert(error)
     })

  }

}
