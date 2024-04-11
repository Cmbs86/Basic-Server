import Model from "../models/Model.js";

// CREATE

const create = async (req, res) => {
    try {
        const model = await Model.create(req.body);
        res.status(201).json(model);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// READ ALl

const getAll = async (req, res) => {
    try {
        const model = await Model.find();
        res.status(200).json(model);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// READ each one

const getById = async (req, res) => {
    try {
        const model = await Model.findById(req.params.id);
        res.status(200).json(model);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// UPDATE

const update = async (req, res) => {
    try {
        const modelUpdated = await Model.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }

            // What is {new: true}?
            // By default, findByIdAndUpdate() returns the original document.
            // To return the document after update you have to pass an option: new: true.
        );
        res.status(200).json(modelUpdated);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE one 

const deleteOne = async (req, res) => {
    try {
        const modelDeleted = await Model.findByIdAndDelete(req.params.id);
        res.status(200).json(modelDeleted);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// DELETE all 

const deleteAll = async (req, res) => {
    try {
        await Model.deleteMany();
        res.status(200).json({ message: "All <items> are deleted." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export {
    create,
    getAll,
    getById,
    update,
    deleteOne,
    deleteAll
};
