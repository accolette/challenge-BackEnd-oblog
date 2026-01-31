import express from "express";
import articlesHandler from "../../app/controllers/articles.controllers.js";

const articlesRouter = express.Router();

articlesRouter.get("/:id", articlesHandler.byId);
articlesRouter.get("/bycategory/:category", articlesHandler.byCategory);
articlesRouter.get("/byauthor/:author", articlesHandler.byAuthor);

export default articlesRouter;
