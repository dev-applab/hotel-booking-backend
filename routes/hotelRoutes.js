const express = require('express')
const router = express.Router()
const { getHotels, getHotel, createHotel, deleteHotel } = require('../controllers/hotelController')
const { protect, adminOnly } = require('../middleware/authMiddleware')

router.get('/', getHotels)
router.get('/:id', getHotel)
router.post('/', protect, adminOnly, createHotel)
router.delete('/:id', protect, adminOnly, deleteHotel)

module.exports = router