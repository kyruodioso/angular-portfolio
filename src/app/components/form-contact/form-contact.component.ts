import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';



@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit{
[x: string]: any;

public form: FormGroup;

isSubmit = true;
submitMessage=''

private contactForm: AngularFirestoreCollection<any>


  constructor(private formBuilder: FormBuilder, private firestore:AngularFirestore){
   
  }

  ngOnInit(){

    this.contactForm = this.firestore.collection('enquiry')

    this.form= this.formBuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      message:['',[Validators.required]],
      company:[''],
      phone:['']
    })
  }

  submitData(value:any){
    this.contactForm.add(value).then(res=>{
      this.submitMessage= `Mensaje enviado! Gracias por contactarse :)`;
    })
    .catch(err=>{
      console.log(err)
    })

    this.isSubmit= true;
   setTimeout(()=>{
    this.isSubmit=false
   },8000)
  }

}
