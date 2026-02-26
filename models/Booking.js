const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hotel',
    required: true,
  },
  hotelName: String,
  hotelImage: String,
  location: String,
  guestName: String,
  email: String,
  phone: String,
  checkIn: String,
  checkOut: String,
  guests: Number,
  roomType: String,
  nights: Number,
  totalPrice: Number,
  status: {
    type: String,
    enum: ['confirmed', 'cancelled'],
    default: 'confirmed',
  },
}, { timestamps: true })

module.exports = mongoose.model('Booking', bookingSchema)