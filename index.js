// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

const words = require('./services/words')

const conf = require('./config/config.json')

// base route
fastify.get('/', async (request, reply) => {
  return { hello: 'Gort! Klaatu. Barada. Nikto!' }
})

/**
 * USAGE: http://localhost:3000/search?term=fab&limit=20
 * RETURNS: Array of results
 */
fastify.get('/search', async (request, reply) => {
  const limit   = request.query.limit || conf.limit.default /* default limit */
  const term  = request.query.term

  // requirement [nothing less than three letters]
  if(!term || term.length < conf.limit.minSize) return []

  // call words service
  const result = await words.find(request.query.term, limit)

  return { data:result, success: true, total:result.length, search: {term:term, limit: limit} }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)

    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
