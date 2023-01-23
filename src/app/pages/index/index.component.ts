import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-index",
  templateUrl: "index.component.html"
})
export class IndexComponent implements OnInit, OnDestroy {
  isCollapsed = true;

  focus:any;
  focus1:any;
  focus2:any;
  date = new Date();
  pagination = 3;
  pagination1 = 1;
  constructor() {}
 
  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");

    

    var slider2 = document.getElementById("sliderDouble");

  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }
}
