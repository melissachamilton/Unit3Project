require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true }
)

const { Locations, Listings } = require('./model')

const HomeAway = new Listings ({
    URL: 'sample@homeaway.com',
    ListDate: '9/1/18',
    Rate: '$70',
    Promotions: '7th night free',
  })

const AirBNB = new Listings ({
    URL: 'sample@airbnb.com',
    ListDate: '9/8/18',
    Rate: '$80',
    Promotions: '50% discount for 1 month stays.',
})

const ExecutiveStays = new Listings ({
    URL: 'sample@executives.com',
    ListDate: '9/15/18',
    Rate: '$90',
    Promotions: '50% discount for 1 month stays.',
})

const Downtown = new Locations ({
  Address: '123 Peachtree Street Atlanta, GA 30303',
  Beds: "2",
  Baths: "1",
  Description: "Beautiful bungalow home near Mercedez Benz Stadium.",
  Listing: [HomeAway]
})
const Smyrna = new Locations ({
  Address: '456 King Street Smyrna, GA 30080',
  Beds: "3",
  Baths: "2",
  Description: "Charming condo near Suntrust Park.",
  Listing: [AirBNB]
})
const Buckhead = new Locations ({
    Address: '678 Lenox Dr, Atlanta GA 30319',
    Beds: "1",
    Baths: "1",
    Description: "Luxury studio suite near Lenox Mall.",
    Listing: [ExecutiveStays]
})

Locations.remove({})
  .then(() => Downtown.save())
  .then(() => console.log('Successful Save'))
  .then(() => mongoose.connection.close())

  Locations.remove({})
  .then(() => Buckhead.save())
  .then(() => console.log('Successful Save'))
  .then(() => mongoose.connection.close())

  Locations.remove({})
  .then(() => Smyrna.save())
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
  