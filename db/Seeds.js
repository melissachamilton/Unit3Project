require('dotenv').config()
const mongoose = require('mongoose')


mongoose.connect(process.env.MONGODB_URI)

const { Locations, Listings } = require('./model')

const HomeAway = new Listings({
  URL: 'sample@homeaway.com',
  ListDate: '9/1/18',
  Rate: '$70',
  Promotions: '7th night free',
})

const AirBNB = new Listings({
  URL: 'sample@airbnb.com',
  ListDate: '9/8/18',
  Rate: '$80',
  Promotions: '50% discount for 1 month stays.',
})

const ExecutiveStays = new Listings({
  URL: 'sample@executives.com',
  ListDate: '9/15/18',
  Rate: '$90',
  Promotions: '50% discount for 1 month stays.',
})

const Downtown = new Locations({
  img:
  src="/images/Downtown-Bungalow.jpg",
  address: '123 Peachtree Street Atlanta, GA 30303',
  beds: "2",
  baths: '1',
  description: "Beautiful bungalow home near Mercedez Benz Stadium.",
  listings: [HomeAway]
})
const Smyrna = new Locations({
  img:
  "/images/Smyrna-Haven.jpg",
  address: '456 King Street Smyrna, GA 30080',
  beds: "3",
  baths: '2',
  description: "Charming condo near Suntrust Park.",
  listings: [AirBNB]
})
const Buckhead = new Locations({
  img: "/images/Buckhead-Condo.jpg",
  address: '678 Lenox Dr, Atlanta GA 30319',
  beds: "1",
  baths: '1',
  description: "Luxury studio suite near Lenox Mall.",
  listings: [ExecutiveStays]
})

Locations.remove({})
  .then(() => Locations.insertMany([Downtown, Buckhead, Smyrna]))
  .then(() => console.log('Successful Save'))
  .then(() => mongoose.connection.close())

//   router.put('/:id', (req, res) => {
//     User.findById(req.params.userId)
//       .then(user => {
//         const idea = user.ideas.id(req.params.id)
//         const updatedIdea = req.body

//         if (updatedIdea.title) {
//           idea.title = updatedIdea.title
//         }

//         if (updatedIdea.description) {
//           idea.description = updatedIdea.description
//         }

//         return user.save()
//       })
//       .then(user => {
//         res.send(user)
//       })
//   })
