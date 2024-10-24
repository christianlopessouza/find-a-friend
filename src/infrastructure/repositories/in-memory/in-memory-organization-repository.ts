import { Organization, OrganizationAddress } from '@/domain/organization'
import { OrganizationDbEntity } from '@/infrastructure/entities/organization-db-entity'
import OrganizationMapper from '@/infrastructure/mappers/organizaton-mapper'
import { OrganizationRepository } from '../organization-repository'
import { OrganizationAddressDbEntity } from '@/infrastructure/entities/organization-address-db-entity'
import { randomUUID } from 'crypto'

export class InMemoryOrganizationRepository implements OrganizationRepository { 
    items: OrganizationDbEntity[] = []

    async create(organization: OrganizationDbEntity): Promise<Organization> {
        this.items.push(organization)

        organization.id = randomUUID()

        const organizationMapped = OrganizationMapper(organization)
        
        return organizationMapped
    }

    async createAddress(organizationAddress: OrganizationAddressDbEntity): Promise<OrganizationAddress> {

        throw new Error('Method not implemented.')
    }   

    async update(organization: Partial<OrganizationDbEntity>): Promise<boolean> {
        throw new Error('Method not implemented.')
    }
}