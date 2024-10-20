import { PostalCodeGateway } from './postal-code-gateway'
import { PostalCodeGatewayDTO } from './postal-code-gateway-dto'

export interface FetchResponse {
    cep: string,
    logradouro: string,
    bairro: string,
    localidade: string,
    uf: string,
    erro?: boolean
}

export class ViaCepGateway implements PostalCodeGateway {
    async getByCode(cep: string) {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const data = (await response.json()) as FetchResponse
            if (data.erro) return false

            const postalCode: PostalCodeGatewayDTO = {
                code: data.cep,
                address: data.logradouro,
                district: data.bairro,
                city: data.localidade,
                state: data.uf,
            }
            return postalCode
        } catch (error) {
            console.log(error)
            return false
        }
    }
}

