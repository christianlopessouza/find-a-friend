import { PostalCode } from '@/domain/postal-code'
import { PostalCodeDbEntity } from '@/infrastructure/entities/postal-code-db-entity'

export interface PostalCodeRepository {
    create(postal: PostalCodeDbEntity): Promise<PostalCode>
    update(postal: Partial<PostalCodeDbEntity>): boolean
    findByCode(code: string): Promise<PostalCode | false>
}