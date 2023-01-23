import { type } from 'os'
import {defineField, defineType} from 'sanity'

export default defineType({
    name:"project",
    title:"Project",
    type:"document",
    fields:[
        defineField({
            name:"title",
            type:"string",
        }),defineField({
            name:"date",
            type:"datetime",
        }),defineField({
            name:"place",
            type:"string"
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }),defineField({
            name:"link",
            type:"url"
        }),  defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true,
            },
          }),defineField({
        name:"tags",
        type:"array",
        of:[
           { type:"string"}
        ],
        options:{
            layout:"tags"
        }
        })
    ]
})