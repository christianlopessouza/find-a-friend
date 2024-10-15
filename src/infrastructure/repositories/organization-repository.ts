import { OrganizationDbEntity } from '@/infrastructure/entities/organization-db-entity'
import { Organization } from '@/domain/organization'

export interface OrganizationRepository {
    create(pet: OrganizationDbEntity): Promise<Organization>
    update(pet: Partial<OrganizationDbEntity>): boolean
}