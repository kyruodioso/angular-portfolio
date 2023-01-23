import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name:"technology",
      type:"array",
      of:[
         { type:"string"}
      ],
      options:{
          layout:"tags"
      }
      }),
      defineField({
        name:"technology_in_process",
        type:"array",
        of:[
           { type:"string"}
        ],
        options:{
            layout:"tags"
        }
        }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      title:'description',
      name: 'description',
      type: 'string'
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
