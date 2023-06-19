const Todo = require("../models/todo");

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    if (todos.length === 0) {
      res.status(404).json({ message: "Nothing here, please input an entry" });
    } else {
      res.json(todos);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
