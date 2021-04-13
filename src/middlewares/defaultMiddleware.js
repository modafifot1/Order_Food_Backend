import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import { upload } from "../configs";
export const defaultMiddleware = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use(upload.any());
  app.use(express.static("public"));
  app.use(morgan("dev"));
};
