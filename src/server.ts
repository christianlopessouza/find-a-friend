import fastify from 'fastify'
import { env } from '@/env'

const app = fastify()


app.listen({
    port: env.PORT,
    host: '0.0.0.0'
}, async (err, address) => {
    if (err) throw err
    console.log(`Server listening at ${address}`)
})
