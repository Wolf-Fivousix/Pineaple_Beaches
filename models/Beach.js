const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BeachSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
    },
    crowdLevel: {
        type: Number,
        default: 0
    },
    temperature: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Beach = mongoose.model("beach", BeachSchema);
module.exports = Beach;