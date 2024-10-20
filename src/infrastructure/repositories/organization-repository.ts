import { OrganizationDbEntity } from '@/infrastructure/entities/organization-db-entity'
import { Organization, OrganizationAddress } from '@/domain/organization'
import { OrganizationAddressDbEntity } from '@/infrastructure/entities/organization-address-db-entity'

export interface OrganizationRepository {
    create(organization: OrganizationDbEntity): Promise<Organization>
    createAddress(organizationAddress: OrganizationAddressDbEntity): Promise<OrganizationAddress>
    update(organization: Partial<OrganizationDbEntity>): boolean
}