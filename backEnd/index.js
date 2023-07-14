//config dotenv
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");

const userModel = require("./model/userModel");

const app = express();
const cors = require("cors");
require("./config");

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// apis
// read data
app.get("/", async (req, res) => {
  try {
    const data = await userModel.find({});
    res.json({ status: true, message: "status loading api", data: data });
  } catch (error) {
    console.log(error);
    res.json({
      status: false,
      message: "Error loading api",
    });
  }
});
app.get("/getone/:id", async (req, res) => {
  try {
    const data = await userModel.findOne({_id : (req.params.id) });
    res.json({ status: true, message: "status loading api", data: data });
  } catch (error) {
    console.log(error);
    res.json({
      status: false,
      message: "Error finding one",
    });
  }
});

// create
app.post("/create", async (req, res) => {
  try {
    const data = new userModel(req.body);
    await data.save();
    res.json({
      status: true,
      message: "Data created statusfully",
      data,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: false,
      message: "Error saving data",
    });
  }
});

// update data

app.put("/update/:id", async (req, res) => {
  try {
    const data = await userModel.findOne({_id : (req.params.id) });
    console.log('data id ',data.id);
    const product = await userModel.findByIdAndUpdate(data.id, req.body, {
      new: true,
    });
    res.json({
      status: true,
      message: "Product updated statusfully",
      data,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: false,
      message: "Error in product update",
    });
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log('delte me ke ',id)
    const data = await userModel.deleteOne({ _id: id.toString() });
    res.json({
      status: true,
      message: "Delete was statusfuly done",
      data,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: false,
      message: "Error deleting data",
    });
  }
});

// Portal
const PORT = process.env.PORT || 3000;

// run listen
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
