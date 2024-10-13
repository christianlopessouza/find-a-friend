import { prisma } from '@/config/prisma'
import { OrganizationUser } from '@/domain/organization-user'
import { OrganizationUserMapper } from '@/infrastructure/mappers/organization-user-mapper'

interface Relations {
    Organization?: boolean,
}

export class InMemoryOrganizationUserRepository 
{
    public async findByMail(email: string, relations?: Relations): Promise<OrganizationUser | null> 
    {
        const user = await prisma.organizationUser.findUnique({
            where: {
                email
            },
            include: relations as Relations
        })

    

        return user ? OrganizationUserMapper({ user, organization: user.Organization }) : null

    }
}