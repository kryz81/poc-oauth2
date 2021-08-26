import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";

export function createApp(): Application {
  const app = express();

  app.use(bodyParser.json());

  app.get("/", (_req: Request, res: Response) => {
    res.send("OK");
  });

  return app;
}
