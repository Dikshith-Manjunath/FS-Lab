import cors from "cors";
import express from "express";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save", (req,res) => {
    fs.appendFileSync("users.txt", "\n" + JSON.stringify(req.body) + "\n");
    res.json({ message: "Details Saved Successfully!!" });
})

app.listen(5000, () => console.log("Server Listening on port 5000 ;)"));