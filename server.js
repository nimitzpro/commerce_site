const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Item = require('./models/Item');

mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true, useUnifiedTopology: true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=>{
  console.log("Connected to DB...");
});

app.use(express.json());

app.use('/sample', express.static('./sample'));

app.get('/', async (req,res) =>{
  let items;
    try{
      items = await Item.find({}) ? Item.find({}) : "None found";
    }
    catch(err){
      return res.sendStatus(404);
    }

    return res.send(items);
});


app.listen(4000, ()=>{console.log("Server running on port 4000...")});