const {formatDate} = require('../utils/dateFormatter')
const {litackaApiClient} = require('../services/litackaApiClient')

module.exports.getCard = async (request, response) => {
    // [CR] patří to do controlleru?
    // [CR] proč musí být jen číslo?
    if (/^\d+$/.test(request.params.cardNumber) === false) {
        return response.status(400).send('Card number must be digits only')
    }

    try {
        // [CR] tohle je sekvenční, šlo by to i paralelně?
        const validity = await litackaApiClient(`cards/${request.params.cardNumber}/validity`)
        const state = await litackaApiClient(`cards/${request.params.cardNumber}/state`)

        if (validity.hasOwnProperty('validity_end') === false) {
            throw Error('Missing "validity_end" property')
        }

        if (state.hasOwnProperty('state_description') === false) {
            throw Error('Missing "state_description" property')
        }

        // [CR] šlo by tohle použít i v jiném pásmu než Praha?
        const validTo = new Date(validity.validity_end)

        response.json({state: state.state_description, valid_to: formatDate(validTo)})
    } catch(error) {
        console.error(error)
        // [CR] je vhodné vracet chybu z externího api?
        response.status(500).send(error.message)
    }
}