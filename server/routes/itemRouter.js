import { Router } from "express";

import {
    createItem,
    getAllItems,
    getItemById,
    updateItem,
    deleteItem,
    deleteAllItems
} from "../controllers/itemController.js";

const itemsRouter = Router();

// CRUD -----------

// CREATE the items
itemsRouter.post("/", createItem);
// READ the items
itemsRouter.get("/", getAllItems);
// READ each movie
itemsRouter.get("/:id", getItemById);
// UPDATE the items
itemsRouter.patch("/:id", updateItem);
// DELETE the items
itemsRouter.delete("/:id", deleteItem)
// DELETE all items
itemsRouter.delete("/", deleteAllItems)

export default itemsRouter;