import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from "../../services/apiservice";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginModel} from "../../model/loginModel";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private adminService : ApiService, private router : Router) { }

  ngOnInit(): void {
  }
  form= new FormGroup({
    email :new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })
  Login(){

    let usuario=this.form.controls.email.value;
    let clave=this.form.controls.password.value;

    let data:LoginModel={
      username:usuario==null ? "":usuario,
      password:clave==null ? "":clave
    }
    this.adminService.postData(data).subscribe(value => {

      alert(value.respuesta);

    })


  }}
