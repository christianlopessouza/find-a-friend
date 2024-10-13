import { FastifyRequest, FastifyReply } from 'fastify'
import { createOrganizationUser } from '@/application/create-organization-user'

export async function createUserOrgController(request: FastifyRequest, reply: FastifyReply) {
    // try {
    const d = request.body
    console.log(d)
    const data = {
        email: d.email,
    }
    await createOrganizationUser(data)
    return reply.status(200).send()
    // } catch (error) {
    //     return reply.status(400).send()
    // }
}


