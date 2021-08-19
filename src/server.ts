import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import mongoose from "mongoose";

import { middlewareError } from './middlewares/error/Error';

mongoose.connect("mongodb://localhost:27017/code_drops", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(express.json());

app.use(middlewareError);

app.listen(4003, () => console.log("Server is running"));
