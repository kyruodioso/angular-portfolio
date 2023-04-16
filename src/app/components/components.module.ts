import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule } from "ngx-bootstrap/alert";

import { FormContactComponent } from './form-contact/form-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from "src/environments/environment";





@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    FormContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AngularFireModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule

  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    FormContactComponent
  ]
})
export class ComponentsModule { }
