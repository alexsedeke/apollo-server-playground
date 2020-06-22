/**
 * Create the default context for apolloServer.
 * Here you can add jwt authorisation and add user to context,
 * so that user information is available in every resolver.
 */
const { PubSub } = require('apollo-server')
const pubsub = new PubSub()

const context = async ({ ctx }) => {
  // Mock empty user
  const result = {
    pubsub,
    user: { status: 'unauthenticated' }
  }
  return result
}

module.exports = context
