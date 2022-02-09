import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { forbiddenUserName } from './userName.validator';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
productArray =['product1', 'product2', 'product3', 'product4']
  ngOnInit(): void {
  }
  notesForm= this.fb.group({
    userName:['',[Validators.required,Validators.pattern,forbiddenUserName]],
    discount:[0,],
    subscribe:[false],
  })
  get userName(){
    return this.notesForm.get('userName')
  }
  get discount(){
    return this.notesForm.get('discount')
  }
  setDiscount(){
    this.notesForm.get('subscribe')?.valueChanges.subscribe(checked=>{
      if(checked){
        this.discount?.setValidators(Validators.required)
      }else{
        this.discount?.clearValidators()
      }
      this.discount?.updateValueAndValidity()
    })
  }
}
