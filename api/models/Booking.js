const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  rental: {type:mongoose.Schema.Types.ObjectId, required:true, ref:'Rental'},
  user: {type:mongoose.Schema.Types.ObjectId, required:true},
  pickupDate: {type:Date, required:true},
  returnDate: {type:Date, required:true},
  name: {type:String, required:true},
  phone: {type:String, required:true},
  price: Number,
});

const BookingModel = mongoose.model('Booking', bookingSchema);

module.exports = BookingModel;