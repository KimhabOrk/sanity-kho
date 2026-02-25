import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imageReference',
  title: 'Image Reference',
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      title: 'Image URL',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'ImageKit URL for the image',
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Alternative text for accessibility',
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Optional caption for the image',
    }),
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'url',
    },
  },
})
