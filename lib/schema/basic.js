const { gql } = require('apollo-server')
const GraphQLJSON = require('graphql-type-json')
const ConstraintDirective = require('apollo-server-constraint-directive')

const schemaDirectives = {
  constraint: ConstraintDirective
}

/*
 * Construct a schema, using GraphQL schema language
 */
const typeDefs = gql`
  scalar JSON
  scalar ValidateString
  scalar ValidateNumber

  directive @constraint(
    minLength: Int
    maxLength: Int
    startsWith: String
    endsWith: String
    notContains: String
    pattern: String
    format: String
    passwordScore: Int
    min: Int
    max: Int
    exclusiveMin: Int
    exclusiveMax: Int
    multipleOf: Int
  ) on INPUT_FIELD_DEFINITION

  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    # This null attribute make is possible to expand query from other definitions. 
    # It's a no-op
    _null: String @deprecated
  }

  type Mutation {
    # This null attribute make is possible to expand query from other definitions. 
    # It's a no-op
    _null: String @deprecated
  }
`

/*
 * Provide resolver functions for your schema fields
 */
const resolvers = {
  JSON: GraphQLJSON,
  Query: {
    _null: () => ''
  },
  Mutation: {
    _null: () => ''
  }
}

module.exports = { typeDefs, resolvers, schemaDirectives }
