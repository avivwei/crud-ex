const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const Quote = require('./QuoteModel')

mongoose.connect('mongodb://localhost/quotes');

app.use(bodyParser.urlencoded({extende: true}));


app.get('/', (req,res) => {
  res.sendfile(__dirname + '/index.html');  
})

app.post('/', (req,res,next) => {
  const quote = new Quote(req.body);
  console.log(req.body)
  quote.save((err,quote) => {
    if (err){return next(err);}
    console.log(quote);
    res.json(quote);
  });

})

app.listen(3000, function(){
  console.log('listening on 3000');
})

