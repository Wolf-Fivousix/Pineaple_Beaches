const Review = require('../../models/Review');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const validateReviewInput = require('../../validation/review');



router.get('/beach/:beach_id', (request,response) => {
    Review.find( {beach: request.params.beach_id})
        .then(reviews => response.json(reviews))
        .catch(errors => response.status(404).json( {noreviewsfound: 'Currently No Reviews'}));
})

router.get('/user/:user_id', (request,response) => {
    Review.find( {user: request.params.user_id})
        .then(reviews => response.json(reviews))
        .catch(errors => response.status(404).json({ noreviewsfound: 'Currently No Reviews'}));
})

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (request,response) => {
        const { errors, isValid } = validateReviewInput(request.body);

        if (!isValid) {
            return response.status(400).json(errors)
        }
        // return response.json(request.body)
        
        const newReview = new Review ({
            post: request.body.post,
            user: request.user.id,
            beach: request.body.beach
        });

        newReview.save().then(review => response.json(review));
    }
);

module.exports = router;