import { Router } from "express";

import {
    create,
    getAll,
    getById,
    update,
    deleteOne,
    deleteAll
} from "../controllers/Controller.js";

const sRouter = Router();

// CRUD -----------

// CREATE the s
Router.post("/", create);
// READ the s
Router.get("/", getAll);
// READ each movie
Router.get("/:id", getById);
// UPDATE the s
Router.patch("/:id", update);
// DELETE the s
Router.delete("/:id", deleteOne)
// DELETE all s
Router.delete("/", deleteAll)

export default Router;