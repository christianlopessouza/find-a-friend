import { InMemoryOrganizationUserRepository } from '@/infrastructure/repositories/in-memory/in-memory-organization-user-repository'

interface Input {
    email: string
}

export async function createOrganizationUser({ email }: Input) 
{
    // verificar se já existe o email cadastrado
    const repo = new InMemoryOrganizationUserRepository()
    const response = await repo.findByMail(email, {
        Organization: true
    })
    
    console.log(response)

    // se não tiver segue o codigo

    // cadastra

    // retorna true|false
}