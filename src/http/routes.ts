import { FastifyInstance } from 'fastify'
import { createUserOrgController } from '@/http/controllers/create-user-org-controller'

export async function routes(app: FastifyInstance) {
    app.post('/create', createUserOrgController)
}