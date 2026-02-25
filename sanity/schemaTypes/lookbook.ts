import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'lookbook',
  title: 'Lookbook',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'season',
      title: 'Season',
      type: 'reference',
      to: [{ type: 'season' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Collection category",
      type: "string",
      options: {
        list: [
          { title: "Fast Fashion", value: "fastFashion" },
          { title: "Ready-To-Wear", value: "ready-to-wear" },
          { title: "Couture", value: "couture" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'imageReference',
      validation: (Rule) => Rule.required(),
      description: 'Main cover image for the lookbook (featured in grid)',
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'imageReference' }],
      description: 'Array of images for the lookbook catalog',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image.url',
    },
  },
})