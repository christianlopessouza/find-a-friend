import 'dotenv/config'
import z from 'zod'

const envSchema = z.object({
    PORT: z.coerce.number().positive().default(3000),
    HOST: z.string(),
    NODE_ENV: z.enum(['development', 'production', 'test'])
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
    throw new Error('Invalid environment variables')
}

export const env = _env.data    