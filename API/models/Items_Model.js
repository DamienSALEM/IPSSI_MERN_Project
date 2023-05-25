const mongoose = require("mongoose");

const Itemschema = new mongoose.Schema({
    nom:{
        type:String,
        require:true
    },
    prix:{
        type:Number,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    quantite:{
        type:Number,
        require:true
    },
});

module.exports = Films = mongoose.model("Items", Itemschema, "Items");
