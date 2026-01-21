const {apiKey} = require('../config')

module.exports.apiAuthController = (request, response, next) => {
    if (request.headers['x-api-key'] !== apiKey) {
        return response.sendStatus(401)
    }

    next()
}