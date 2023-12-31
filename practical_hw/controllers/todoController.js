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

exports.createTodo = async (req, res) => {
  try {
    if (!req.body.title) {
      throw new Error("Title is a mandatory input");
    }

    const todo = new Todo(req.body);
    await todo.save();
    res.json(todo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getTodo = async (req, res) => {
  try {
    const todo = await Todo.findOne({ _id: req.params.id });
    if (!todo) {
      throw new Error("Did not find this item");
    } else {
      res.json(todo);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findOne({ _id: req.params.id });
    if (!todo) {
      res.status(404).json({ message: "Did not find an item to update" });
    } else {
      const properties = Object.keys(req.body);
      properties.forEach((property) => (todo[property] = req.body[property]));
      await todo.save();
      res.json(todo);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const todoDeleted = await Todo.findOneAndRemove({ _id: req.params.id });
    if (!todoDeleted) {
      res.status(404).json({ message: "Nothing found to delete" });
    } else {
      res.json(todoDeleted);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
