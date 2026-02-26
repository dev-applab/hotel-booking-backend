const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

// ── Middleware ──
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:5175',
    'http://localhost:5176',
    'http://localhost:5177',
    'https://hotel-booking-app-five.vercel.app',
  ],
  credentials: true,
}))
app.use(express.json())

// ── Routes ──
app.use('/api/auth', require('./routes/authRoutes'))
app.use('/api/hotels', require('./routes/hotelRoutes'))
app.use('/api/bookings', require('./routes/bookingRoutes'))

// ── Health check ──
app.get('/', (req, res) => {
  res.json({ message: '🏨 HotelBook API is running!' })
})

// ── Connect to MongoDB ──
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB')
    app.listen(process.env.PORT || 8000, () => {
      console.log(`🚀 Server running on port ${process.env.PORT || 8000}`)
    })
  })
  .catch((err) => {
    console.log('❌ MongoDB connection error:', err)
  })