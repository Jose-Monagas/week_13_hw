require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
