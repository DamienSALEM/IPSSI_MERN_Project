const express = require("express");
const router = express.Router();
const users = require("../models/Users_Model");

router
  .get("/users", (req, res) => {
    users.find().then((resultat) => res.json(resultat));
  })
  .get("/users/:id",(req,res)=>{
    users.findById(req.params.id)
    .then(user=>res.json(user))
    .catch(err=>res.status(404).json({error:"User not found"}))
  })
  .post('/users',(req,res)=>{
    users.create(req.body).then(resultat=>res.json({message:"user added"}))
    .catch(err=>res.status(400).json({error:"Error in the user creation"}))
  })
  .put("/users/:id",(req,res)=>{
    users.findByIdAndUpdate(req.params.id,req.body)
    .then(resultat=>res.json({message:"update done"}))
    .catch(err=>res.status(400).json({error:"update failed"}))
  })
  .delete("/users/:id",(req,res)=>{
    users.findByIdAndDelete(req.params.id)
    .then(resultat=>res.json({message:"user deleted"}))
    .catch(err=>res.status(404).json({error:"error in deletion"}))
  })
module.exports = router;
