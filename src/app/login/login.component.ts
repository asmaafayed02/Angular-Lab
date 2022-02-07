import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from '../login-user';
import { EnrollloginService } from '../services/enrolllogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private enrolllogin:EnrollloginService,private router:Router) { }
  ngOnInit(): void {
  }
  loginUser:LoginUser = new LoginUser('','')
  message!:string 
onLogin(){
  this.enrolllogin.enrolllogin(this.loginUser).subscribe(res=>{
    console.log('sucess',res)
    const data = localStorage.getItem("user") as string
    console.log(data, typeof(data));
    
    const storage= JSON.parse(data);
    const emailUser=  storage.email;
    const userPassword = storage.password
    if(emailUser== this.loginUser.email && userPassword== this.loginUser.password){
      console.log('welcome '+emailUser);
      this.message='welcome '+emailUser
    }else{
      console.log('no user found');
      this.router.navigate(['/register']);
      
    }

  },err=>{
    console.log(err);
    
  })
}
}
