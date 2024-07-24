const express = require("express");


// const { SaveNewAdventureDetail, GetAdventureDetailsUsingAdventureIdController } = require("./../controller/AdventureDetails.controller")

// const {Authorization} = require("./../middlewares/authorization.middleware")

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

module.exports = AdventureDetailRouter;
