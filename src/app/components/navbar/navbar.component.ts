import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isCollapsed = true;
  @Input() target: any

  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }

}
