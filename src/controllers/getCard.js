const {formatDate} = require('../utils/dateFormatter')
const {litackaApiClient} = require('../services/litackaApiClient')

module.exports.getCard = async (request, response) => {
    if (/^\d+$/.test(request.params.cardNumber) === false) {
        return response.status(400).send('Card number must be digits only')
    }

    try {
        const validity = await litackaApiClient(`cards/${request.params.cardNumber}/validity`)
        const state = await litackaApiClient(`cards/${request.params.cardNumber}/state`)

        if (validity.hasOwnProperty('validity_end') === false) {
            throw Error('Missing "validity_end" property')
        }

        if (state.hasOwnProperty('state_description') === false) {
            throw Error('Missing "state_description" property')
        }

        const validTo = new Date(validity.validity_end)

        response.json({state: state.state_description, valid_to: formatDate(validTo)})
    } catch(error) {
        console.log(error)
        response.status(500).send(error)
    }
}