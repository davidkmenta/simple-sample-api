const express = require('express')
const router = express.Router()
const swaggerJsdoc = require('swagger-jsdoc')

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Simple sample API',
            version: '1.0.0',
        },
    },
    apis: ['./src/routes/*.js'],
}

const openapiSpecification = swaggerJsdoc(swaggerOptions)

router.get('/', (request, response) => {
    response.setHeader('Content-Type', 'application/json')
    response.send(openapiSpecification)
})

module.exports = router
