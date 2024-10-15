import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

export function createOrganizationController(request: FastifyRequest, reply: FastifyReply) {
    const createOrganizationSchema = z.object({
        name: z.string(),
        phoneNumber: z.string(),
        email: z.string().email(),
        password: z.string(),
        confirmPassword: z.string().min(6),
        address: z.object({
            postalCode: z.string(),
            addressNumber: z.string(),
            addressComplement: z.string()
        })
    })
    return reply.status(200).send()
}