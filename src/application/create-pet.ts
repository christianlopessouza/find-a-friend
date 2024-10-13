import { PetRepository } from '@/infrastructure/repositories/pet-repository'

interface PetInput {
    name: string;
    description: string;
    size: string;
    birthDate: Date;
    dependencyLevel: string;
    energyLevel: string;
    environmentId: number;
    raceId: number;
    adoptionRequirementId: Array<string>
}

export class CreatePet {
    constructor(private petRepository: PetRepository) { }

    async execute(pet: PetInput) {
        const response = await this.petRepository.create({
            name: pet.name,
            description: pet.description,
            size: pet.size,
            birthDate: pet.birthDate,
            dependencyLevel: pet.dependencyLevel,
            energyLevel: pet.energyLevel,
            environmentId: pet.environmentId,
            raceId: pet.raceId,
        })

        return response
    }
}

