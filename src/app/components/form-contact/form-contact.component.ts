import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit{


  public form: FormGroup;

  constructor(private formBuilder:FormBuilder){
   
  }


 
  ngOnInit():void{
    this.form= this.formBuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      message:['',[Validators.required]],
      company:[''],
      phone:['']
    })
  }

  send():any{
    this.form.reset({
     name:'',
     email:'',
     message:'',
     company:'',
     phone:''
    })
 }


}
