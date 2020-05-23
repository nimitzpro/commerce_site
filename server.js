const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Item = require('./models/Item');

mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=>{
  console.log("Connected to DB...");
});

app.get('/', async (req,res) =>{
    try{
      let items = await Item.find();
    }
    catch(err){
      return err;
    }

    res.send(items);
});


app.listen(4000, ()=>{console.log("Server running on port 4000...")});