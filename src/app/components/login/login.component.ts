import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  respadata: any;

  constructor(private service:AdminService){}
  ngOnInit(): void {
    
  }

  ProdceedLogin(logindata:any){
    
    } 

}
