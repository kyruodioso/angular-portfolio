import { Injectable } from '@angular/core';
import imageUrlBuilder from "@sanity/image-url";

import sanityClient from '@sanity/client'
import {Project} from '../interfaces/project.interface'
import { HttpClient } from '@angular/common/http';
import { Author } from '../interfaces/author.interface';



@Injectable({
  providedIn: 'root'
})

export class SanityService {

  constructor(private http: HttpClient) { 

  }

   sanityClientCredentials = {
    option: sanityClient({
      projectId: "8ofqymqk",
      dataset: "production"
    })
  }

  urlFor = (source: any) =>
  imageUrlBuilder(this.sanityClientCredentials.option).image(source)

  async getProjects(): Promise<Project[]>{
    return await this.sanityClientCredentials.option.fetch(
      ` *[_type == "project"]{
        _id,
        title,
        date,
        place,
        description,
        link,
        mainImage,
        tags
        }`
        
    )
  }

  async getAuthor(): Promise<Author[]>{
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "author"]{
        _id,
        name,
        slug,
        technology,
        technology_in_process,
        link,
        image,
        description
        }`
    )
  }




 

}
