const todoController = require("../../controllers/todo.controller");
const todoModel = require("../../model/todo.model");
const httpMocks =require("node-mocks-http");
const newTodo=require("../mock-data/new-todo.json")

todoModel.create = jest.fn();

let req, res, next;
beforeEach(()=>{
  req =httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = null;
});

describe("todoController.createTodo", () => {

  beforeEach(()=>{
    req.body =newTodo;
  })

  it("should have a createTodo function", () => {
    expect(typeof todoController.createTodo).toBe("function");
  });
  it("should call todoModel.create",()=>{    
    todoController.createTodo(req, res, next);
    expect(todoModel.create).toBeCalledWith(newTodo);
  })
});

it("should return 201 response code",()=>{
  todoController.createTodo(req,res,next);
  expect(res.statusCode).toBe(201);
})
it("should return json body in response",()=>{
  todoModel.create.mockReturnValue(newTodo);
  todoController.createTodo(req,res,next);
  expect(res._getJSONData()).toStrictEqual(newTodo);
})
