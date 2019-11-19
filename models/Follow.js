const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FollowSchema = new Schema({
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

const Follow = mongoose.model("follows", FollowSchema);
module.exports = Follow;