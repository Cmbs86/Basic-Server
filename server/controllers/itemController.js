import asyncHandler from "../config/asyncHandler.js";
import ItemModel from "../models/ItemModel.js";

// CREATE the items

const createItem = asyncHandler(async (req, res) => {
  const item = await ItemModel.create(req.body);
  res.status(201).json(item);
});

// READ the items

const getAllItems = asyncHandler(async (req, res) => {
  const items = await ItemModel.find();
  res.status(200).json(items);
});

// READ each item

const getItemById = asyncHandler(async (req, res) => {
  const item = await ItemModel.findById(req.params.id);
  res.status(200).json(item);
});

// UPDATE the items

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

// DELETE one item

const deleteItem = asyncHandler(async (req, res) => {
  const itemDeleted = await ItemModel.findByIdAndDelete(req.params.id);
  res.status(200).json(itemDeleted);
});

// DELETE all items

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
