import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import schemas from './sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Kimhab Ork Studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'gvp68dtj',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.documentTypeListItem('season').title('Seasons'),
            S.documentTypeListItem('project').title('Projects'),
            S.documentTypeListItem('lookbook').title('Lookbooks'),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemas,
  },
})
