const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const passport = require('passport');
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");


router.post("/register", (request, response) => {
    const { errors, isValid } = validateRegisterInput(request.body);
    if(!isValid) {
        return response.status(400).json(errors);
    }

    User.findOne({ username: request.body.username })
        .then(user => {
            if (user) {
                return response.status(400).json({ username: "Username has already been used" });
            }
            else {
                const newUser = new User({
                    username: request.body.username,
                    password: request.body.password
                });

                // Insecure way of doing it.
                // newUser.save()
                //     .then(user => response.send(user))
                //     .catch(error => response.send(error));

                bcrypt.genSalt(10, (error, salt) => {
                    bcrypt.hash(newUser.password, salt, (error, hashedPassword) => {
                        if (error) throw error;
                        newUser.password = hashedPassword;
                        newUser.save()
                            .then(user => {
                                const payload = { id: user.id, username: user.username };
                  
                                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (error, token) => {
                                  response.json({
                                    success: true,
                                    token: "Bearer " + token
                                  });
                                });
                            })
                            .catch(error => console.log(error));
                        });
                    });
            }
        });
    });

router.post("/login", (request, response) => {
    const { errors, isValid } = validateLoginInput(request.body);

    if (!isValid) {
        return response.status(400).json(errors);
    }

    const username = request.body.username;
    const password = request.body.password;

    User.findOne({ username })
        .then(user => {
            if(!user) {
                return response.status(404).json({ username: "Invalid credentials" });
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch) {
                        const payload = {
                            id: user.id,
                            username: user.username
                        }
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            { expiresIn: 3600 },
                            (error, token) => {
                                response.json({
                                    success: true,
                                    token: "Bearer " + token
                                });
                            }
                        );
                    } else {
                        errors.password = 'Invalid credentials';
                        return response.status(400).json(errors);
                    }
                });
        });
});

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
        id: req.user.id,
        username: req.user.username
    });
})

module.exports = router;
