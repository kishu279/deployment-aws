import express from "express";
import type { Request, Response } from "express";
const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req: Request, res: Response) => {
  console.log("Hello world!");
  res.json({ message: "Hello world!" }).status(200);
});

app.post("/data", (req: Request, res: Response) => {
  const data = req.body;
  console.log("Data received!", { data });
  res
    .json({ message: "Data received successfully", success: true })
    .status(200);
});
