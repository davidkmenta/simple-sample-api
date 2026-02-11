require('dotenv').config()

if (!process.env.API_KEY) {
    throw Error('API key must be set!') // [CR] LITACKA_API_URL neni potřeba?
}

module.exports = {
    apiKey: process.env.API_KEY,
    litackaApiUrl: process.env.LITACKA_API_URL,
    litackaApiKey: process.env.LITACKA_API_KEY,
}
