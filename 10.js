const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1/examDB");

const Form = mongoose.model("Form", { 
    name: String, usn: String, dept: String, reason: String, date: String, sign: String 
});

app.post("/submit", async (req, res) => {
    await new Form(req.body).save();
    res.send("Saved Successfully!");
});

app.listen(3000, () => console.log("Running..."));