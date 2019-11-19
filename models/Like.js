const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LikeSchema = new Schema({
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

const Like = mongoose.model("like", LikeSchema);
module.exports = Like;