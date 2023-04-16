import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./pages/index/index.component";
import { AboutmeComponent } from "./pages/aboutme/aboutme.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { ProjectsComponent } from "./pages/projects/projects.component";


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: IndexComponent },
  {path:"about-me", component:AboutmeComponent},
  {path:"contact", component:ContactComponent},
  {path:"projects", component:ProjectsComponent},

 
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: false
    })
  ],
  exports: []
})
export class AppRoutingModule {}
