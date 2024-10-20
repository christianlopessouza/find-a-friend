import { createPostalCodeService } from '@/application/services/create-postal-code-service'
import { createOrganization } from '@/application/use-cases/create-organization'
import { OrganizationRepository } from '@/infrastructure/repositories/organization-repository'
import { PostalCodeRepository } from '@/infrastructure/repositories/postal-code-repository'
import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

export function createOrganizationController(organizationRepository: OrganizationRepository, postalCodeRepository: PostalCodeRepository, createPostalCodeService: createPostalCodeService) {
    return async (request: FastifyRequest, reply: FastifyReply) => {
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

        const { name, phoneNumber, email, password, confirmPassword, address } = createOrganizationSchema.parse(request.body)

        const organization = new createOrganization(organizationRepository, postalCodeRepository, createPostalCodeService)
        organization.execute({ name, phoneNumber, email, password, confirmPassword, address })

        return reply.status(200).send()
    }
}