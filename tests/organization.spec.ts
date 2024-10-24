import { OrganizationDbEntity } from '@/infrastructure/entities/organization-db-entity'
import { InMemoryOrganizationRepository } from '@/infrastructure/repositories/in-memory/in-memory-organization-repository'
import { expect, test } from 'vitest'

// test('should create a org', async () => {
//     // criar repositorio in memory da org


//     // criar repositorio postalcode 


//     // instanciar service de create


//     createOrganizationController()
// })


test('deve criar um registro im-memory', async () => {
    const values: OrganizationDbEntity = {
        name: 'test',
        phoneNumber: '123456789',
        email: 'i@email.com',
    }   


    const repository = new InMemoryOrganizationRepository()

    const response = await repository.create(values)

    expect(response).toBeTypeOf('object')
})