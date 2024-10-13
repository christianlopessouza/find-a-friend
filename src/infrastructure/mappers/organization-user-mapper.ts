import { OrganizationUser } from '@/domain/organization-user'
import { OrganizationUserDbEntity } from '@/infrastructure/entities/organization-user-db-entity'
import OrganizationMapper from './organizaton-mapper'
import { OrganizationDbEntity } from '../entities/organization-db-entity'

interface Relations {
    user: OrganizationUserDbEntity,
    organization?: OrganizationDbEntity
}

export function OrganizationUserMapper({ user, organization }: Relations): OrganizationUser 
{
    const entity: OrganizationUser = {
        id: user?.id,
        name: user?.name,
        email: user?.email,
    }

    if (organization)
        entity.Organization = OrganizationMapper(organization)

    return entity
}