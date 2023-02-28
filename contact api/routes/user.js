const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const User = require("../models/users");

router.use(bodyParser.json());
//READ
router.get("/contacts", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      data: users
    });
  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: e.message,
    });
  }
});
//CREATE
router.post("/contacts", async (req, res) => {
  try {
    const users = await User.create(req.body);
    res.status(201).json({
      status: "success",
      users
    });
  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: e.message,
    });
  }
});
//READ SPECIFIC USER
router.get("/contacts/:id", async (req, res) => {
  try {
    const users = await User.find({ _id: req.params.id });
    res.status(200).json({
      status: "success",
      data: users
    });
  } catch (e) {
    res.status(404).json({
      status: "failed",
      message: "there is no contact with that id",
    });
  }
});

router.delete("/contacts/:id", async (req, res) => {
  try {
    const users = await User.deleteOne({ _id: req.params.id });
    res.status(204).json({
      status: "success",
      data: users
    });
  } catch (e) {
    res.status(404).json({
      status: "failed",
      message: e.message,
    });
  }
});

router.put("/contacts/:id", async (req,res)=>{
    try{
const users=  await User.updateOne({_id: req.params.id},req.body);
res.status(204).json({
    status : "success",
    data: users
})
    }catch(e){
        res.status(404).json({
            status : "failed",
            message: "There is no contact with that id"
        })
    }
})
router.patch("/contacts/:id", async (req,res)=>{
    try{
const users=  await User.updateOne({_id: req.params.id},req.body);
res.status(204).json({
    status : "success",
    data: users
})
    }catch(e){
        res.status(404).json({
            status : "failed",
            message: "There is no contact with that id"
        })
    }
})

module.exports = router;
