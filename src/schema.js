import { makeSchema } from 'nexus'
import path from 'path'
import { importAllFromGlob } from './helpers/file-loader'

export default importAllFromGlob('**/*.gql.js').then(ts => {
  console.log(`${ts.length} GraphQL types has been imported automatically!`)

  return makeSchema({
    types: ts,
    outputs: {
      schema: path.join(__dirname, '/generated/schema.graphql'),
      typegen: path.join(__dirname, '/generated/typings.ts')
    }
  })
})
