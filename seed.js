const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Hotel = require('./models/Hotel')

dotenv.config()

const hotels = [
  {
    name: 'The Grand Luxury',
    location: 'New York, USA',
    price: 299,
    rating: 4.9,
    tag: '⭐ Top Rated',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400',
    description: 'Experience the pinnacle of luxury in the heart of New York City.',
    amenities: ['🏊 Pool', '🏋️ Gym', '🍽️ Restaurant', '🅿️ Parking', '📶 Free WiFi', '🛎️ Room Service'],
    reviews: 1284,
  },
  {
    name: 'Ocean Breeze Resort',
    location: 'Miami, USA',
    price: 189,
    rating: 4.7,
    tag: '🔥 Hot Deal',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400',
    description: 'Wake up to stunning ocean views at our beachfront paradise.',
    amenities: ['🏖️ Private Beach', '🏊 Pool', '🍹 Beach Bar', '📶 Free WiFi', '🚤 Water Sports', '🍽️ Restaurant'],
    reviews: 876,
  },
  {
    name: 'Mountain Escape Lodge',
    location: 'Aspen, USA',
    price: 349,
    rating: 4.8,
    tag: '❄️ Winter Special',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400',
    description: 'A cozy mountain retreat nestled in the heart of Aspen.',
    amenities: ['⛷️ Ski Access', '🔥 Fireplace', '🛁 Hot Tub', '📶 Free WiFi', '🍽️ Restaurant', '🏋️ Gym'],
    reviews: 542,
  },
  {
    name: 'City Center Suites',
    location: 'Chicago, USA',
    price: 159,
    rating: 4.5,
    tag: '💼 Business',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400',
    description: 'The ideal base for business travelers in downtown Chicago.',
    amenities: ['💼 Business Center', '📶 Free WiFi', '🍽️ Restaurant', '🅿️ Parking', '🏋️ Gym', '🛎️ Concierge'],
    reviews: 723,
  },
  {
    name: 'Sunset Paradise Hotel',
    location: 'Los Angeles, USA',
    price: 229,
    rating: 4.6,
    tag: '🌅 Best View',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400',
    description: 'Perched on the Hollywood Hills with panoramic views of LA.',
    amenities: ['🌅 Rooftop Bar', '🏊 Infinity Pool', '📶 Free WiFi', '🍽️ Restaurant', '🚗 Valet', '🏋️ Gym'],
    reviews: 934,
  },
  {
    name: 'Lakeside Retreat',
    location: 'Seattle, USA',
    price: 199,
    rating: 4.4,
    tag: '🌿 Nature',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400',
    description: 'Surrounded by the natural beauty of the Pacific Northwest.',
    amenities: ['🚣 Kayaking', '🌲 Nature Trails', '📶 Free WiFi', '🍽️ Restaurant', '🔥 Fireplace', '🐾 Pet Friendly'],
    reviews: 412,
  },
]

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('✅ Connected to MongoDB')
    await Hotel.deleteMany()
    await Hotel.insertMany(hotels)
    console.log('✅ Hotels seeded successfully!')
    process.exit()
  })
  .catch((err) => {
    console.log('❌ Error:', err)
    process.exit(1)
  })