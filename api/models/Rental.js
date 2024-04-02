const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  model: String,
  year: Number,
  mileage: String,
  fuel: String,
  address: String,
  photos: [String],
  description: String,
  perks: [String],
  availabilityStart: Date,
  availabilityEnd: Date,
  capacity: Number,
  price: Number,
});

const RentalModel = mongoose.model('Rental', rentalSchema);

module.exports = RentalModel;
