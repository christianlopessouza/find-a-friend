import { Organization, OrganizationAddress } from '@/domain/organization'
import { OrganizationRepository } from '@/infrastructure/repositories/organization-repository'
import { PostalCodeRepository } from '@/infrastructure/repositories/postal-code-repository'
import { createPostalCodeService } from '@/application/services/create-postal-code-service'

interface Input {
    name: string,
    phoneNumber: string,
    email: string,
    password: string,
    confirmPassword: string,
    address: Address,
}

interface Output {
    organization: Organization
    organizationAddress: OrganizationAddress
}

interface Address {
    postalCode: string;
    addressNumber?: string;
    addressComplement?: string;
}


export class createOrganization {
    constructor(private organizationRepository: OrganizationRepository, private postalCodeRepository: PostalCodeRepository, private createPostalCodeService: createPostalCodeService) { }
    async execute(input: Input): Promise<Output> {
        if (input.confirmPassword != input.password) {
            throw new Error('Password and confirm password do not match')
        }

        let postal = await this.postalCodeRepository.findByCode(input.address.postalCode)

        if (!postal) {
            postal = await this.createPostalCodeService.execute(input.address.postalCode)
        }

        const organization = await this.organizationRepository.create({
            name: input.name,
            phoneNumber: input.phoneNumber,
            email: input.email
        })

        const organizationAddress = await this.organizationRepository.createAddress({
            postalCodeId: postal.id,
            organizationId: organization.id,
            addressNumber: input.address.addressNumber,
            addressComplement: input.address.addressComplement
        })

        return {
            organization,
            organizationAddress
        }
    }
}