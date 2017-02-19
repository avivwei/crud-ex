const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  name: String,
  quote: String
})

const Quote = mongoose.model('Quote', QuoteSchema);
module.exports = Quote;