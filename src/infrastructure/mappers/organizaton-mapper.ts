import { Organization } from '@/domain/organization'
import { OrganizationDbEntity } from '@/infrastructure/entities/organization-db-entity'

export default function OrganizationMapper(organization: OrganizationDbEntity): Organization 
{
    return {
        id: organization.id,
        name: organization.name
    }
}