const request = require('supertest');
const app = require("../../app");
const newTodo = require("../mock-data/new-todo.json");
const endpointUrl = "/todos/";


describe(endpointUrl,()=>{
    it("POST "+ endpointUrl, async ()=>{
        const Response = await request(app)
        .post(endpointUrl)
        .send(newTodo);
        expect(Response.statusCode).toBe(201);
        expect(Response.body.title).toBe(newTodo.title);
        expect(Response.body.done).toBe(newTodo.done);
    })
})