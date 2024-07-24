const mongoose = require("mongoose");

const SlotSchema = new mongoose.Schema({
    date : { type : Date, required : true },
    numberOfPerson : { type : Number, required : true, default : 20}
})

const AdventureDetailSchema = new mongoose.Schema({
    name : { type : String, required : true},
    city : { type : String, required : true },
    imageURL : { type : String, required : true },
    specialities: { type : Array, required : false},
    rating : { type :Number, required : true}
})

const AdventureDetail = mongoose.model("Hospitals", AdventureDetailSchema)

module.exports = AdventureDetail