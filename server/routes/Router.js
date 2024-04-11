import { Router } from "express";

import {
    create,
    getAll,
    getById,
    update,
    deleteOne,
    deleteAll
} from "../controllers/Controller.js";

const router = Router();

// CRUD -----------

// CREATE the s
router.post("/", create);
// READ the s
router.get("/", getAll);
// READ each movie
router.get("/:id", getById);
// UPDATE the s
router.patch("/:id", update);
// DELETE the s
router.delete("/:id", deleteOne)
// DELETE all s
router.delete("/", deleteAll)

export default router;