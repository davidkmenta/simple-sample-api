const {apiKey} = require('../config')

// [CR] je to opravdu controller?
module.exports.apiAuthController = (request, response, next) => {
    if (request.headers['x-api-key'] !== apiKey) {
        return response.sendStatus(401)
    }

    next()
}