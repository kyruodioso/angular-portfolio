import { Component, OnInit, OnDestroy } from "@angular/core";
import {SanityService} from '../../service/sanity.service'
import { Author } from "src/app/interfaces/author.interface";
import { Project } from 'src/app/interfaces/project.interface';


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit, OnDestroy {

  isCollapsed = true;

  constructor(private sanityService:SanityService){}
  projects: Project[]=[]
  author: Author[]=[]
  imageUrl(source: any){
    return this.sanityService.urlFor(source);
  }

  async getAuthor(): Promise<Author[]>{
    this.author = await this.sanityService.getAuthor();
    return this.author;
  }

  async getProjects(): Promise<Project[]>{
    this.projects = await this.sanityService.getProjects();
    return this.projects; 
  }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("profile-page");
    this.getAuthor()
    this.getProjects()
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("profile-page");
  }
}
