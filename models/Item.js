const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let itemSchema = new Schema({
    title : String,
    category : String,
    price : Number,
    titlePicture : String,
    otherPictures : [String]
},{
    versionKey : false
});

module.exports = mongoose.model("Item", itemSchema);