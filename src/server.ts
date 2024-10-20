import { env } from '@/config/env'
import { app } from '@/app'


app.listen({
    port: env.PORT,
    host: '0.0.0.0'
}, async (err, address) => {
    if (err) throw err
    console.log(`Server listening at ${address}`)
})
