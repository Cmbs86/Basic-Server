import ItemModel from "../models/ItemModel.js";

// CREATE the items

const createItem = async (req, res) => {
    try {
        const item = await ItemModel.create(req.body);
        res.status(201).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// READ the items

const getAllItems = async (req, res) => {
    try {
        const items = await ItemModel.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// READ each item

const getItemById = async (req, res) => {
    try {
        const item = await ItemModel.findById(req.params.id);
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// UPDATE the items

const updateItem = async (req, res) => {
    try {
        const itemUpdated = await ItemModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }

            // What is {new: true}?
            // By default, findByIdAndUpdate() returns the original document.
            // To return the document after update you have to pass an option: new: true.
        );
        res.status(200).json(itemUpdated);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE one item

const deleteItem = async (req, res) => {
    try {
        const itemDeleted = await ItemModel.findByIdAndDelete(req.params.id);
        res.status(200).json(itemDeleted);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// DELETE all items

const deleteAllItems = async (req, res) => {
    try {
        await ItemModel.deleteMany();
        res.status(200).json({ message: "All items are deleted." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export {
    createItem,
    getAllItems,
    getItemById,
    updateItem,
    deleteItem,
    deleteAllItems
};
