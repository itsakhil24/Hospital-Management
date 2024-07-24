const express = require("express");
const AdventureDetailRouter = express.Router()
const hsptlModel = require('../model/AdventureDetails.model')
// AdventureDetailRouter.post('/add', Authorization(['admin']), SaveNewAdventureDetail)

// AdventureDetailRouter.get("/", GetAdventureDetailsUsingAdventureIdController)


AdventureDetailRouter.post('/add',(req,res)=>{
   try{
    const adventureDetail = new hsptlModel(req.body)
    adventureDetail.save()
    res.send({msg:"Hospital Details added Successfully!"})
   }
   catch(error){
    res.status(500).send({msg:"Error in add data"})
   }
    
})

AdventureDetailRouter.get('/hospitalDetails',async(req,res)=>{
    try{
        const adventureDetail =  await hsptlModel.find()
        
        res.send({data:adventureDetail})
    }
    catch(error){
        res.status(500).send({msg:"Error in getting Hospital data"})
    }

})





// Delete hospital by ID
AdventureDetailRouter.delete('/delete/:hospitalId', async (req, res) => {
    try {
        const hospitalId = req.params.hospitalId;
        
        console.log(`Deleting hospital with ID: ${hospitalId}`);
  
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

module.exports = AdventureDetailRouter;
