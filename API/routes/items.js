const express = require("express");
const router = express.Router();
const items = require("../models/Items_Model");

router
  .get("/items", (req, res) => {
    items.find().then((resultat) => res.json(resultat));
  })
  .get("/items/:id", (req, res) => {
    items
      .findById(req.params.id)
      .then((item) => res.json(item))
      .catch((err) => res.status(404).json({ error: "item not found" }));
  })
  .post("/items", (req, res) => {
    items
      .create(req.body)
      .then((resultat) => res.json({ message: "item added" }))
      .catch((err) =>
        res.status(400).json({ error: "Error in the item creation" })
      );
  })
  .put("/items/:id", (req, res) => {
    items
      .findByIdAndUpdate(req.params.id, req.body)
      .then((resultat) => res.json({ message: "update done" }))
      .catch((err) => res.status(400).json({ error: "update failed" }));
  })
  .delete("/items/:id", (req, res) => {
    items
      .findByIdAndDelete(req.params.id)
      .then((resultat) => res.json({ message: "item deleted" }))
      .catch((err) => res.status(404).json({ error: "error in deletion" }));
  })
  .put("/items/cart", (req, res) => {
    req.body
      .forEach((item) => {
        item_data = items.findById(item.id);
        item["quantite"] = item_data.quantite - 1;
        items
          .findByIdAndUpdate(item.id, item)
          .catch((err) => res.status(400).json({ error: "update failed" }));
      })
      .then((resultat) => res.json({ message: "cart buyed" }))
      .catch((err) => res.status(400).json({ error: "update failed" }));
  });
module.exports = router;
