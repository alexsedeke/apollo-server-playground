/**
 * Create the default context for apolloServer.
 * Here you can add jwt authorisation and add user to context,
 * so that user information is available in every resolver.
 */
const context = async ({ ctx }) => {
  // Mock empty user
  const result = { user: { status: 'unauthenticated' } }
  return result
}

module.exports = context
