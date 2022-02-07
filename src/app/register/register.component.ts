import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private enrollment:EnrollmentService) { }
 medias:Array<string>=['facebook', 'twitter', 'google']
userModel:User = new User("","","","","");
  ngOnInit(): void {
  }
onSubmit(){
  console.log(this.userModel);
  this.enrollment.enrollment(this.userModel).subscribe(res => {
    console.log('sucess',res);
    localStorage.setItem('user',JSON.stringify(res));
  },err=>{
    console.log(err);
    
  })
  
}

}
