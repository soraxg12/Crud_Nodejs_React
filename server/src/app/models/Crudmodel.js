const mongoose = require('../database')

const ItemSchema = new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:true},
    date:{type:Date,default:Date.now}
})

const Items = mongoose.model("Items",ItemSchema);

module.exports = Items