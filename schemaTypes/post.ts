import {defineField, defineType} from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (r) => r.required(),
    }),
    defineField({name: 'excerpt', type: 'text', rows: 3}),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {hotspot: true},
      fields: [{name: 'alt', type: 'string', title: 'Alt text'}],
    }),
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: [
          {title: 'Same-Day Teeth', value: 'same-day-teeth'},
          {title: 'Dental Implants', value: 'dental-implants'},
          {title: 'Digital Dentistry & Technology', value: 'digital-dentistry'},
          {title: 'Cosmetic Dentistry', value: 'cosmetic-dentistry'},
          {title: 'Dental Tourism in Albania', value: 'dental-tourism'},
          {title: 'Prices & Treatment Planning', value: 'prices'},
          {title: 'Patient Stories', value: 'patient-stories'},
          {title: 'Oral Health & Aftercare', value: 'oral-health'},
        ],
        layout: 'dropdown',
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'image', options: {hotspot: true}, fields: [{name: 'alt', type: 'string'}]},
      ],
    }),
    defineField({name: 'seoTitle', type: 'string'}),
    defineField({name: 'seoDescription', type: 'text', rows: 2}),
  ],
  preview: {select: {title: 'title', media: 'mainImage', subtitle: 'publishedAt'}},
})
