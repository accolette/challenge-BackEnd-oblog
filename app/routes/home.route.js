import express from "express";
import homePage from "../controllers/home.controllers.js";

const homeRouter = express.Router();

homeRouter.get("/", homePage.hP);
homeRouter.get("/resulat-recherche", homePage.resultPage);

export default homeRouter;
