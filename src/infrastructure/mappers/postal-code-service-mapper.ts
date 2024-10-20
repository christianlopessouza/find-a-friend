import { PostalCode } from '@/domain/postal-code'
import { PostalCodeGatewayDTO } from '@/services/postal-code-gateway/postal-code-gateway-dto'

export function PostalCodeServiceMapper(postal:PostalCodeGatewayDTO):PostalCode{
// tratamento de dados utilizando o repository para buscar nome de cidade e retornar o ID

    const postalCode:PostalCode = {
        id: postal.id,
        code: postal.code,
        address: postal.address,
        district: postal.district,
        city: postal.city,
        state: postal.state
    }

    return postalCode
}


//     code: string,
//     address: string,
//     district: string,
//     city: string,
//     state: string,