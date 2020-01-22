const deepmerge = require('deepmerge')
/**
 * Join GraphQL typeDef and resolvers of numerious definitions to one.
 * The function espect an array of objects containing two attributes typeDef and resolvers.
 * The typeDef attribute should be string or an array of strings,
 * while the resolvers attribute should be an object.
 * @param {array} definitions Is an array of objects contain typeDef and resolvers attributes.
 * @returns {object} Object contains joined typeDef and resolvers attributes.
 */
function joinSchemas (definitions) {
  const typeDefsArray = []
  const resolversArray = []
  const schemaDirectivesArray = []

  if (!Array.isArray(definitions)) {
    throw new Error('joinSchemaDefinitions expect an array of objects.')
  }

  definitions.forEach((definition) => {
    const { typeDefs, resolvers, schemaDirectives } = definition

    // merge typeDefs depend if it is an array or string
    if (Array.isArray(typeDefs)) {
      typeDefsArray.push(...typeDefs)
    } else {
      typeDefsArray.push(typeDefs)
    }

    if (resolvers) {
      resolversArray.push(resolvers)
    }

    if (schemaDirectives) {
      schemaDirectivesArray.push(schemaDirectives)
    }
  })

  // join now all resolvers in array to single object
  const resolvers = deepmerge.all(resolversArray)
  const schemaDirectives = deepmerge.all(schemaDirectivesArray)

  return { typeDefs: typeDefsArray, resolvers, schemaDirectives }
}

module.exports = joinSchemas
