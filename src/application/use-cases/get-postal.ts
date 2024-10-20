export function getPostal({ postalCode }: Input) {
    const postal = await this.postalCodeRepository.findByCode(input.address.postalCode)

    if (postal === false) {

        if (postalCodeService) {

        }
    }
}