import { PostalCode } from '@/domain/postal-code'
import { CityRepository } from '@/infrastructure/repositories/city-repository'
import { PostalCodeRepository } from '@/infrastructure/repositories/postal-code-repository'
import { PostalCodeApiService } from '@/infrastructure/services/postal-code-api-service'

export class createPostalCodeService {
    constructor(private cityRepository: CityRepository, private postalCodeRepository: PostalCodeRepository, private postalCodeApiService: PostalCodeApiService) { }
    async execute(postalCode: string): Promise<PostalCode> {
        const postalCodeService = await this.postalCodeApiService.getByCode(postalCode)

        if (!postalCodeService) throw new Error('Postal code not found')

        const city = await this.cityRepository.getByName(postalCodeService.city, postalCodeService.state)

        if (!city) throw new Error('Postal code not found')

        const postal = await this.postalCodeRepository.create({
            code: postalCodeService.code,
            address: postalCodeService.address,
            district: postalCodeService.district,
            cityId: city.id,
        })

        return postal
    }

}