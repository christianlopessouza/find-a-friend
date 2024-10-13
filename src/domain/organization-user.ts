import { Organization } from '@/domain/organization'

export interface OrganizationUser {
    id?: string,
    name?: string
    email?: string,
    password?: string,
    Organization?: Organization
}