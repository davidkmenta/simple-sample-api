const express = require('express')
const router = express.Router()
const {apiAuthController} = require('../controllers/apiAuthController')
const {getCard} = require('../controllers/getCard')

router.use('/:cardNumber', apiAuthController)

/**
 * @openapi
 * /cards/{cardNumber}:
 *   get:
 *     description: Returns card's state and end date of its validity
 *     security:
 *       - ApiKeyAuth: []
 *     parameters:
 *       - name: cardNumber
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           pattern: '^\d+$'
 *     responses:
 *       200:
 *         description: Card's details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 state:
 *                   type: string
 *                   description: Human-readable state of the card
 *                 valid_to:
 *                   type: string
 *                   description: Date until the card is valid
 *       400:
 *         description: Invalid card number given
 *       401:
 *         description: Invalid X-API-Key given
 */
router.get('/:cardNumber', getCard)

module.exports = router
