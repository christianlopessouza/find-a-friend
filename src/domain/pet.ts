import { DependencyLevel } from '@/shared/enums'

export interface Pet {
    id?: string
    name?: string
    description?: string
    size?: string
    birthDate?: Date
    dependencyLevel?: DependencyLevel
    energyLevel?: string
    environment?: Environment
    race?: Race,
    adoptionRequirementId?: Array<string>
}

export interface Environment {
    id: number
    name: string
}

export interface Animal {
    id: string
    name: string
}

export interface Race {
    id: string
    name: string
    animal: Animal
}