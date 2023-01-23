import {  Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Project } from 'src/app/interfaces/project.interface';
import {SanityService} from '../../service/sanity.service'
import SwiperCore, { Navigation, Pagination} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit, OnDestroy{

  constructor(private sanityService:SanityService){}

  projects: Project[] = [];

  imageUrl(source: any){
    return this.sanityService.urlFor(source);
  }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("landing-page");

    this.getProjects();
  }

  async getProjects(): Promise<Project[]>{
    this.projects = await this.sanityService.getProjects();
    return this.projects; 
  }
  swiperConfig: any = {
    direction:'horizontal',
    slidesPerView: 1,
    keyboard: true,
    spaceBetween: 10,
    pagination: {clickable: true},
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },

    }
}
ngOnDestroy() {
  var body = document.getElementsByTagName("body")[0];
  body.classList.remove("landing-page");
}

}
