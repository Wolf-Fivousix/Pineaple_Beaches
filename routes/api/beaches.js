const express = require("express");
const router = express.Router();
const passport = require("passport");
const Beach = require("../../models/Beach");

router.get("/test", (request, response) => {
    response.json({ msg: "oooooooooi" });
})

router.get("/", (request, response) => {
    Beach.find()
        .then(beaches => response.json(beaches))
        .catch(errors => console.log(errors));
})

module.exports = router;