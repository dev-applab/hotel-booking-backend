const Hotel = require('../models/Hotel')

// @GET /api/hotels
const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find()
    res.json(hotels)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// @GET /api/hotels/:id
const getHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id)
    if (!hotel) return res.status(404).json({ message: 'Hotel not found' })
    res.json(hotel)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// @POST /api/hotels (admin only)
const createHotel = async (req, res) => {
  try {
    const hotel = await Hotel.create(req.body)
    res.status(201).json(hotel)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// @DELETE /api/hotels/:id (admin only)
const deleteHotel = async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id)
    res.json({ message: 'Hotel deleted' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = { getHotels, getHotel, createHotel, deleteHotel }