const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static(".")); 

let users = [], results = [];

app.post("/reg", (req, res) => { users.push(req.body); res.send("Done"); });
app.post("/login", (req, res) => {
    let u = users.find(x => x.u == req.body.u && x.p == req.body.p);
    res.send(u ? "OK" : "Fail");
});
app.post("/sub", (req, res) => { results.push(req.body); res.send("Saved"); });
app.get("/res", (req, res) => res.json(results));

app.listen(3000, () => console.log("Running..."));