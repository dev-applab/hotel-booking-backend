const mongoose = require('mongoose')

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  tag: { type: String },
  image: { type: String },
  description: { type: String },
  amenities: [String],
  reviews: { type: Number, default: 0 },
}, { timestamps: true })

module.exports = mongoose.model('Hotel', hotelSchema)