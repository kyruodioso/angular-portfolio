import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
//import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
//import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
//import { PopoverModule } from "ngx-bootstrap/popover";

import { IndexComponent } from "./index/index.component";

import { AboutmeComponent } from './aboutme/aboutme.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

import {SwiperModule} from 'swiper/angular';
import { ComponentsModule } from "../components/components.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SuccessFormComponent } from './success-form/success-form.component';
import { AngularFireModule } from '@angular/fire/compat';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from "src/environments/environment";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    
    BsDropdownModule.forRoot(),
   // ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
   // PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    JwBootstrapSwitchNg2Module,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    //BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    SwiperModule
  ],
  declarations: [
    IndexComponent,

    AboutmeComponent,
    ProjectsComponent,
    ContactComponent,
    PageNotFoundComponent,
    SuccessFormComponent
  ],
  exports: [
    IndexComponent,

  ],
  providers: []
})
export class PagesModule {}
