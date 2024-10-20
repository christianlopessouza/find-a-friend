import { PostalCodeGateway } from '@/infrastructure/services/postal-code-gateway/postal-code-gateway'
import { PostalCodeGatewayDTO } from '@/infrastructure/services/postal-code-gateway/postal-code-gateway-dto'

export class PostalCodeApiService {
    constructor(private postalCodeGateway: PostalCodeGateway) { }
    async getByCode(code: string): Promise<PostalCodeGatewayDTO | false> {
        const response = await this.postalCodeGateway.getByCode(code)

        return response
    }
}