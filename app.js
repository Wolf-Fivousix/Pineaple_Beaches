const express = require("express");
const passport = require('passport');
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const User = require("./models/User");
const bodyParser = require("body-parser");
const Review = require("./models/Review")
const reviews = require("./routes/api/reviews")

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB =)"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/api/reviews", reviews);

const port = process.env.PORT || 5000;

app.listen(port, () => { console.log(`Listening on port ${port}`)});
