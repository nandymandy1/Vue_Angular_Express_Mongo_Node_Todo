const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  completedOn: {
    type: Date,
    default: null
  }
});

module.exports = Todo = mongoose.model("todos", TodoSchema);
