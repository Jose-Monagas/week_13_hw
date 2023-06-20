const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("../app");
const server = app.listen(8080, () => console.log("let's get ready to test"));
const Todo = require("../models/todo");
let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
  await mongoose.connection.close();
  mongoServer.stop();
  server.close();
});

describe("Test the todos endpoints", () => {
  test("Create a new todo", async () => {
    const response = await request(app)
      .post("/todos")
      .send({ title: "Groceries", description: "Buy meat and veggies" });

    expect(response.statusCode).toBe(200);
    expect(response.body.title).toEqual("Groceries");
    expect(response.body.description).toEqual("Buy meat and veggies");
    expect(response.body.completed).toEqual(false);
  });

  test("Return an array of all the todos", async () => {
    const todos = [
      {
        title: "Groceries",
        description: "Buy meat and veggies",
      },
      {
        title: "Book flight",
        description: "Find and book a flight to Italy for next month",
      },
    ];
    Todo.find = jest.fn().mockResolvedValue(todos);
    const response = await request(app).get("/todos");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(todos);
  });

  test("Update a todo", async () => {
    const todo = new Todo({ title: "Groceries", description: "Buy milk" });
    await todo.save();

    const response = await request(app)
      .put(`/todos/${todo._id}`)
      .send({ title: "Workout", description: "Chest and biceps" });

    expect(response.statusCode).toBe(200);
  });

  test("Delete a todo", async () => {
    const todo = new Todo({ title: "Groceries", description: "Buy milk" });
    await todo.save();

    const response = await request(app).delete(`/todos/${todo._id}`);
    expect(response.statusCode).toBe(200);
    expect(response.body._id).toEqual(todo._id.toString());
  });
});
describe("Test endpoints for edge cases", () => {
  test("It should not create a to do", async () => {
    const response = await request(app)
      .post("/todos")
      .send({ description: "Buy Groceries" });

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toEqual("Tile is mandatory");
  });

  test("It should not find a todo entry", async () => {
    const todos = [];
    Todo.find = jest.fn().mockResolvedValue(todos);

    const response = await request(app).get("/todos");
    expect(response.statusCode).toBe(404);
    expect(response.body.message).toEqual("No todo was  found");
  });

  test("It should not update todos", async () => {
    const todo = new Todo({ title: "Haircut", description: "Book appoinment" });
    const someId = new mongoose.Types.ObjectId();
    await todo.save();

    const response = await request(app)
      .put(`/todos/${randomId}`)
      .send({ title: "study", description: "homework" });

    expect(response.statusCode).toBe(404);
    expect(response.body.message).toEqual("No valid todo to be updated");
  });

  test("It should not delete a todo", async () => {
    const someId = new mongoose.Types.ObjectId();
    const response = await request(app).delete(`todos/${someId}`);
    expect(response.statusCode).toBe(404);
  });
});
