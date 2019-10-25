import { GraphQLServer } from 'graphql-yoga'
import path from 'path'
import { makeSchema } from 'nexus'
import { importAllFromGlob } from './helpers/file-loader'

const PORT = 8080

const mainFunction = async () => {
  const types = await importAllFromGlob('**/*.gql.js')
  console.log(`${types.length} GraphQL types has been imported automatically!`)

  const schema = makeSchema({
    types: types,
    outputs: {
      schema: path.join(__dirname, '/generated/schema.graphql'),
      typegen: path.join(__dirname, '/generated/typings.ts')
    }
  })

  const server = new GraphQLServer({ schema })

  server.start({ port: PORT }, () => {
    console.log(`Server is listening at ${PORT}!`)
  })
}

mainFunction()
