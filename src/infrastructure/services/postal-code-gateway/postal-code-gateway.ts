import { PostalCodeGatewayDTO } from './postal-code-gateway-dto'

export interface PostalCodeGateway
{
    getByCode(cep: string): Promise<PostalCodeGatewayDTO | false>
}