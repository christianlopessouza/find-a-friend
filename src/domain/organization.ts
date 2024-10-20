import { PostalCode } from '@/domain/postal-code'

export interface Organization{
    id?: string,
    name?: string,
 }
export interface OrganizationAddress{
    id?: string,
    addressNumber?: string,
    addressComplement?: string,
    postalCode?: PostalCode,
    oganization?: Organization
}