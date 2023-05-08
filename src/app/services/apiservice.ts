import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginModel} from "../model/loginModel";
import {RespuestaModel} from "../model/respuestaModel";


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlLogin='http://localhost:8080/login'
  constructor(private http: HttpClient) { }
  postData(data:LoginModel):Observable<RespuestaModel>{
    return this.http.post<RespuestaModel>(this.urlLogin,data);
  }


}

