import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { confirmPassward } from '../confirmPassword.validator';

@Component({
  selector: 'app-rf-register',
  templateUrl: './rf-register.component.html',
  styleUrls: ['./rf-register.component.scss']
})
export class RfRegisterComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  medias:Array<string>=['facebook', 'twitter', 'google']
  ngOnInit(): void {
  }
  registerForm= this.fb.group({
    userName:['',[Validators.required,Validators.pattern]],
    email:['',[Validators.required,Validators.pattern]],
    password:['',[Validators.required]],
    confirmPassward:['',[Validators.required]],
    topics:['',[Validators.required]]

  },{validator:[confirmPassward]})
  get userName(){
    return this.registerForm.get('userName')
  }
  get email(){
    return this.registerForm.get('email')
  }
  get password(){
    return this.registerForm.get('password')
  }
  get confirmPassward(){
    return this.registerForm.get('confirmPassward')
  }
}
