"use strict";
const { app } = require("../src/server");
const supertest = require("supertest");
const mockRequest = supertest(app);

const { db } = require("../src/models/index");

// before any of the test create a connection
beforeAll(async () => {
  await db.sync();
});

describe("Web server", () => {
  // Check if 404 is handled
  test("404 on a bad route or an invalid route", async () => {
    const response = await mockRequest.get("/brokeLink");
    expect(response.status).toEqual(404);
  });

  /* Food */
  test("Should respond with 404 status on an invalid method", async () => {
    const response = await mockRequest.patch("/food");
    expect(response.status).toBe(404);
  });

  test("add a food", async () => {
    const response = await mockRequest.post("/food").send({
      FoodName: "Maqlobah",
      FoodType: "Salata",
      FoodPrice: 25,
    });
    expect(response.status).toBe(201);
  });

  test("bad method", async () => {
    const response = await mockRequest.post("/food/:id").send({
      FoodName: "Mnsaf",
      FoodType: "Jmeed ",
      FoodPrice: 99,
    });
    expect(response.status).toBe(404);
  });

  test("get all food", async () => {
    const response = await mockRequest.get("/food");
    expect(response.status).toBe(200);
  });

  test("get one record", async () => {
    const response = await mockRequest.get("/food/1");
    expect(response.status).toBe(200);
  });
  test("update a record", async () => {
    const response = await mockRequest.put("/food/1");
    expect(response.status).toBe(201);
  });

  test("delete a record", async () => {
    const response = await mockRequest.delete("/food/1");
    expect(response.status).toBe(204);
  });

  /* Clothes */

  test("Should respond with 404 status on an invalid route", async () => {
    const response = await mockRequest.get("/cloth");
    expect(response.status).toBe(404);
  });

  test("add a food", async () => {
    const response = await mockRequest.post("/clothes").send({
      ClothesName: "T-Shirt",
      ClothesType: "Koton",
      ClothesPrice: 25,
    });
    expect(response.status).toBe(201);
  });

  test("add a clothes", async () => {
    const response = await mockRequest.post("/clothes").send({
      ClothesName: "T-Shirt",
      ClothesType: "Koton",
      ClothesPrice: 88,
    });
    expect(response.status).toBe(201);
  });

  test("bad method", async () => {
    const response = await mockRequest.post("/clothes/:id").send({
      ClothesName: "Shirt",
      ClothesType: "Pollster",
      ClothesPrice: 56,
    });
    expect(response.status).toBe(404);
  });

  test("get all clothes", async () => {
    const response = await mockRequest.get("/clothes");
    expect(response.status).toBe(200);
  });
  test("get one record", async () => {
    const response = await mockRequest.get("/clothes/1");
    expect(response.status).toBe(200);
  });

  test("update a record", async () => {
    const response = await mockRequest.put("/clothes/1");
    expect(response.status).toBe(201);
  });
  test("delete a record", async () => {
    const response = await mockRequest.delete("/clothes/1");
    expect(response.status).toBe(204);
  });
  /* User */
  test("can get list of records", async () => {
    const response = await mockRequest.get("/user");
    expect(response.status).toBe(200);
  });

  test("404 on a bad method", async () => {
    const response = await mockRequest.post("/user/1");
    expect(response.status).toEqual(404);
  });

  test("Create a record using POST", async () => {
    const response = await mockRequest.post("/user");
    expect(response.status).toEqual(201);
  });

  test("Read a list of records using GET", async () => {
    const response = await mockRequest.get("/user");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });

  test("Update a record using PUT", async () => {
    const response = await mockRequest.put("/user/1");
    expect(typeof response.body).toEqual("object");
  });

  test("delete a record", async () => {
    const response = await mockRequest.delete("/user/1");
    expect(response.status).toBe(201);
  });

  afterAll(async () => {
    await db.drop();
  });
});
