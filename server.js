const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Item = require('./models/Item');

mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true, useUnifiedTopology: true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=>{
  console.log("Connected to DB...");
});

app.use(cors());

app.use(express.json());

app.use('/sample', express.static('./sample'));
app.use('/images', express.static('./images'));

app.get('/categories', async (req,res) =>{
  let items;
    try{
      items = await Item.find({});
    }
    catch(err){
      return res.sendStatus(404);
    }

    return res.send(items);
});

app.post('/additem', async (req,res)=>{
  const item = new Item({
    title: req.body.title,
    category: req.body.category,
    price : req.body.price,
    titlePicture : req.body.titlePicture,
    otherPictures : req.body.otherPictures ? req.body.otherPictures : []
  });
  try{
      const itemSaved = await item.save();
      res.status(200).send(itemSaved);
      console.log(itemSaved);
  }
  catch(err){
      res.status(500).json({message:err});
      console.log(err);
  }
});


app.listen(4000, ()=>{console.log("Server running on port 4000...")});