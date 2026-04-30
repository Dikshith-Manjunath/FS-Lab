const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Undertaking = require("./models/Undertaking");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/undertakingDB")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/submit", async (req, res) => {
    try {
        const formData = new Undertaking(req.body);
        await formData.save();
        res.send("<h2>Submitted Successfully!</h2><a href='/'>Go Back</a>");
    } catch (error) {
        res.send("Error: " + error.message);
    }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));