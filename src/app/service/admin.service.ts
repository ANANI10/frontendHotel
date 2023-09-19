import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  ProdceedLogin(inputdate:any){
    this.http.post(`${environment.backendhost}/**/` , inputdate)
  }
}
