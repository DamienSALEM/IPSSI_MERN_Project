const express = require("express");
require("dotenv").config();
let cors = require("cors");

const app = express();
const connDB = require("./DB/conn");

const itemsRoute = require("./routes/items");
const usersRoute = require("./routes/users");

app.use(cors());
app.use(express.json());
connDB();

app.use("/items", itemsRoute);
app.use("/users", usersRoute);

app.listen(5000);
