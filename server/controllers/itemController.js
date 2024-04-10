import asyncHandler from "../config/asyncHandler.js";
import ItemModel from "../models/ItemModel.js";

/* 
@desc    Create a new item
@route   POST /api/items
@access  Public
*/
const createItem = asyncHandler(async (req, res) => {
  const item = await ItemModel.create(req.body);
  res.status(201).json(item);
});

/* 
@desc    Get all items
@route   GET /api/items
@access  Public
*/
const getAllItems = asyncHandler(async (req, res) => {
  const items = await ItemModel.find();
  res.status(200).json(items);
});


/* 
@desc    Get an item by ID
@route   GET /api/items/:id
@access  Public
*/
const getItemById = asyncHandler(async (req, res) => {
  const item = await ItemModel.findById(req.params.id);
  res.status(200).json(item);
});


/* 
@desc    Update an item
@route   PATCH /api/items/:id
@access  Public
*/
const updateItem = asyncHandler(async (req, res) => {
  const itemUpdated = await ItemModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }

    // What is {new: true}?
    // By default, findByIdAndUpdate() returns the original document.
    // To return the document after update you have to pass an option: new: true.
  );
  res.status(200).json(itemUpdated);
});


/* 
@desc    Delete an item
@route   DELETE /api/items/:id
@access  Public
*/
const deleteItem = asyncHandler(async (req, res) => {
  const itemDeleted = await ItemModel.findByIdAndDelete(req.params.id);
  res.status(200).json(itemDeleted);
});


/* 
@desc    Delete all items
@route   DELETE /api/items
@access  Public
*/
const deleteAllItems = asyncHandler(async (req, res) => {
  await ItemModel.deleteMany();
  res.status(200).json({ message: "All items are deleted." });
});

export {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem,
  deleteAllItems,
};
