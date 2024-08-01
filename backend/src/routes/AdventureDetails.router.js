const express = require("express");
const AdventureDetailRouter = express.Router();
const hsptlModel = require('../model/AdventureDetails.model');

// Add new hospital details
AdventureDetailRouter.post('/hos/add', async (req, res) => {
    try {
        const adventureDetail = new hsptlModel(req.body);
        await adventureDetail.save();
        res.send({ msg: "Hospital Details added Successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Error in adding data" });
    }
});

// Get all hospital details
AdventureDetailRouter.get('/hospitalDetails', async (req, res) => {
    try {
        const adventureDetail = await hsptlModel.find();
        res.json({ data: adventureDetail });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error in getting hospital data" });
    }
});

// Delete hospital by ID
AdventureDetailRouter.delete('/delete/:hospitalId', async (req, res) => {
    try {
        const hospitalId = req.params.hospitalId;
        const deletedHospital = await hsptlModel.findByIdAndDelete(hospitalId);
        if (!deletedHospital) {
            return res.status(404).json({ msg: "Hospital not found" });
        }
        res.json({ data: deletedHospital, msg: "Hospital deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error deleting hospital data" });
    }
});

// Update hospital by ID
AdventureDetailRouter.put('/editPost/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        const updatedData = req.body;
        const editedResult = await hsptlModel.findByIdAndUpdate(postId, updatedData, { new: true });
        if (editedResult) {
            res.json({ msg: "Post updated successfully!", data: editedResult });
        } else {
            res.status(400).json({ msg: "Error in updating the post" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error in editing hospital data" });
    }
});

module.exports = AdventureDetailRouter;
