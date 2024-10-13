import { Pet } from '@/domain/pet'
import { PetDbEntity } from '@/infrastructure/entities/pet-db-entity'

export interface PetRepository {
    create(pet: PetDbEntity): Promise<Pet>
    update(pet: Partial<PetDbEntity>): boolean
}