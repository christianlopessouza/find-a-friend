import { City } from '@/domain/postal-code'

export interface CityRepository {
    getByName(cityName: string, stateName: string): Promise<City | false>
}