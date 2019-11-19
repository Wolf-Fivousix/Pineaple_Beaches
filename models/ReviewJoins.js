const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewJoinsSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        reference: "users"
    },
    beach: {
        type: Schema.Types.ObjectId,
        reference: "beaches"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const ReviewJoins = mongoose.model("reviewJoins", ReviewJoinsSchema);
module.exports = ReviewJoins;