const { ApolloServer } = require('apollo-server')
const schema = require('./lib/schema')
const dataSources = require('./lib/datasources')
const context = require('./lib/context')

// Create ApolloServer instance by
// adding schema, dataSources, context informations.
const server = new ApolloServer({
  schema,
  dataSources,
  context
})

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
