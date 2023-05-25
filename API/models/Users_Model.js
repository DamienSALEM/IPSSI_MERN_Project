const mongoose = require("mongoose");

const Userschema = new mongoose.Schema({
    nom:{
        type:String,
        require:true
    },
    prenom:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    telephone:{
        type:String,
        require:true
    },
    mot_de_passe:{
        type:String,
        require:true
    },
    admin:{
        type:Number,
        require:true
    },
});

module.exports = Users = mongoose.model("Users", Userschema, "Users");
