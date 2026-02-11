const {litackaApiUrl, litackaApiKey} = require('../config');

module.exports.litackaApiClient = async (path) => {
    const apiResponse = await fetch(`${litackaApiUrl}/${path}`, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8', // [CR] je nutná tato hlavička? k čemu slouží?
            'X-API-Key': litackaApiKey,
        }
    })

    // [CR] co když to nebude json?
    return await apiResponse.json()
}