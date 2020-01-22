const { makeExecutableSchema } = require('apollo-server')
const joinSchemas = require('../util/joinSchemas')

/*
 * Import schemas
 */
const basic = require('./basic')
const book = require('./book')

/*
 * Join all schemas
 */
const schema = joinSchemas([
  basic,
  book
])

module.exports = makeExecutableSchema(schema)
