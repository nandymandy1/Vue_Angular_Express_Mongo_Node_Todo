// Bring in the express
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Initialize the express app
const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Initialize the database
const db = "mongodb://localhost:27017/todos";

// Connnect with the database
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log(`Connected to database successfully.`))
  .catch(err => console.log(`Error in connecting the database`, err));

const PORT = process.env.PORT || 5000;
// Start Listening to the server
const server = app.listen(PORT, () =>
  console.log("Server started on port", PORT)
);

const todos = require("./routes/todos");
app.use("", todos);
