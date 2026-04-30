const mongoose = require("mongoose");

const undertakingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    usn: { type: String, required: true },
    department: { type: String, required: true },
    reason: { type: String, required: true },
    date: { type: String, required: true },
    signature: { type: String, required: true }
});

module.exports = mongoose.model("Undertaking", undertakingSchema);