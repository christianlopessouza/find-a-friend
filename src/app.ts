import fastify from 'fastify'
import { createUserOrgController } from '@/http/controllers/create-user-org-controller'

// com fastify construir rotas
export const app = fastify()

app.post('/create', createUserOrgController)