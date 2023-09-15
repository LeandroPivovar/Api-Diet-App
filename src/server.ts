import Fastify from 'fastify'
import { routes } from './routes'
const app = Fastify({
  logger: true,
})

app.register(routes)


const start = async () => {
  try {
    await app.listen({ port: 3000 })
  } catch (err) {
    app.log.error(err)
  }
}

start()
