import { Pet } from '@/domain/pet'
import { PetDbEntity } from '@/infrastructure/entities/pet-db-entity'

export class PetMapper {
    static toDomain(pet: PetDbEntity): Pet {
        return {
            name: pet.name,
            description: pet.description,
            size: pet.size,
            birthDate: pet.birthDate,
            dependencyLevel: pet.dependencyLevel,
            energyLevel: pet.energyLevel,
            environmentId: pet.environmentId,
            raceId: pet.raceId
        }
    }
}