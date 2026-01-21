const express = require('express')
const router = express.Router()

/**
 * @openapi
 * /:
 *   get:
 *     description: Status page
 *     responses:
 *       200:
 *         description: Everything works
 */
router.get('/', (request, response) => {
    response.sendStatus(200)
})

module.exports = router
