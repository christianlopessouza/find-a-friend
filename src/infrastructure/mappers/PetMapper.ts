import { Pet } from '@/domain/pet'
import { PetDbEntity } from '@/infrastructure/entities/pet-db-entity'

export class PetMapper {
    static toDomain(pet: PetDbEntity): Pet {
        return new Pet({
            id: userEntity.id,
            name: userEntity.name,
        })
    }
}