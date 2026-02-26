const Booking = require('../models/Booking')

// @POST /api/bookings
const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create({
      ...req.body,
      user: req.user._id,
    })
    res.status(201).json(booking)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// @GET /api/bookings/my
const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id })
    res.json(bookings)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// @GET /api/bookings (admin only)
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('user', 'name email')
    res.json(bookings)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// @PUT /api/bookings/:id/cancel
const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: 'cancelled' },
      { new: true }
    )
    res.json(booking)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = { createBooking, getMyBookings, getAllBookings, cancelBooking }