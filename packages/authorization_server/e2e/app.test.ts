import req from "supertest";
import { Application } from "express";
import { createApp } from "../src/app";

let app: Application;

beforeAll(() => {
  app = createApp();
});

test("app works", async () => {
  await req(app).get("/").expect(200, "OK");
});
