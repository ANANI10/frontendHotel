import { Injectable } from '@angular/core';
import { Client } from 'src/models/client.models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public seConnecter(userData : Client){
    localStorage.setItem('ACCESS_TOKEN' , "access_token" );
  }

  public estConnecter(){
    return localStorage.getItem('ACCESS_TOKEN' )!==null;
  }

  public seDeconnecter(){
    localStorage.removeItem('ACCESS_TOKEN')
  }

}
