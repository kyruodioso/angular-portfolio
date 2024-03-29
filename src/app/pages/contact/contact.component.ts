import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: "app-contact",
  templateUrl: "contact.component.html"
})
export class ContactComponent implements OnInit, OnDestroy {

  public form: FormGroup;
  private contactForm: AngularFirestoreCollection<any>
  isSubmit = true;
submitMessage=''

  isCollapsed = true;
  focus;
  focus1;
  focus2;
  focus3;
  focus4;
  constructor(private formBuilder: FormBuilder, private firestore:AngularFirestore) {}
  @HostListener("document:mousemove", ["$event"])
  onMouseMove(e:any) {
    var squares1 = document.getElementById("square1");
    var squares2 = document.getElementById("square2");
    var squares3 = document.getElementById("square3");
    var squares4 = document.getElementById("square4");
    var squares5 = document.getElementById("square5");
    var squares6 = document.getElementById("square6");
    var squares7 = document.getElementById("square7");
    var squares8 = document.getElementById("square8");
    


    var posX = e.clientX - window.innerWidth / 2;
    var posY = e.clientY - window.innerWidth / 6;

   
    squares1.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares2.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares3.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares4.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares5.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares6.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares7.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.02 +
      "deg) rotateX(" +
      posY * -0.02 +
      "deg)";
    squares8.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.02 +
      "deg) rotateX(" +
      posY * -0.02 +
      "deg)";
  }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("register-page");

    this.contactForm = this.firestore.collection('enquiry')


    this.form= this.formBuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      message:['',[Validators.required]],
      company:[''],
      phone:['']
    })
    this.onMouseMove(event);
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

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("register-page");
  }
}



