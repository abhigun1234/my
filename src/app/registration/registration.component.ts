import { Component, OnInit } from '@angular/core';
import {CourseService}  from '..//course.service'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public course:CourseService) { }

  ngOnInit() {

  }
  addUser(){
    this.course.addUser().subscribe(res=>{
      console.log("res",res)
    })
  }

}
