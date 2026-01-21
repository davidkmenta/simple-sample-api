const {litackaApiUrl, litackaApiKey} = require('../config');

module.exports.litackaApiClient = async (path) => {
    const apiResponse = await fetch(`${litackaApiUrl}/${path}`, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'X-API-Key': litackaApiKey,
        }
    })

    return await apiResponse.json()
}