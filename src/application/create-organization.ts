import { Organization } from '@/domain/organization'
import { OrganizationRepository } from '@/infrastructure/repositories/organization-repository'

interface Input {
    name: string,
    phoneNumber: string,
    email: string,
    password: string,
    confirmPassword: string,
    address: Address,
}

interface Address {
    postalCode: string;
    addressNumber?: string;
    addressComplement?: string;
}

export class createOrganization {
    constructor(private organizationRepository: OrganizationRepository) { }
    async execute(input: Input): Promise<Organization> {
        if (input.confirmPassword != input.password) {
            throw new Error('Password and confirm password do not match')
        }

        const postal = 

        const organization = this.organizationRepository.create({
            name: input.name,
            phoneNumber: input.phoneNumber,
            email: input.email,
            password: input.password,
            address: {
                postalCode: input.address.postalCode,
                addressNumber: input.address.addressNumber,
                addressComplement: input.address.addressComplement
            }
        })

        return {
            organization
        }
    }
}