const express = require("express");
const router = express.Router();
const passport = require("passport");
const validateTweetInput = require("../../validation/tweets");
const Tweet = require("../../models/Tweet");

router.get("/test", (request, response) => {
    response.json({ message: "This is the tweet route." });
});

router.get("/", (request, response) => {
    Tweet.find()
        .sort({ date: -1 })
        .then(tweets => response.json(tweets))
        .catch(errors => response.status(400).json(errors));
});

router.get("/user/:user_id", (request, response) => {
    Tweet.find({ user: request.params.user_id })
        .then(tweets => response.json(tweets))
        .catch(errors => response.status(400).json(errors));
});

router.get("/:id", (request, response) => {
    Tweet.findById(request.params.id)
        .then(tweet => response.json(tweet))
        .catch(errors => response.status(400).json(errors));
});

router.post("/",
    passport.authenticate("jwt", { session: false }),
    (request, response) => {
        const { errors, isValid } = validateTweetInput(request.body);

        if (!isValid) {
            return response.status(400).json(errors);
        }

        const newTweet = new Tweet({
            user: request.user.id,
            text: request.body.text
        });

        newTweet.save()
            .then(tweet => response.json(tweet));
    }
);

module.exports = router;