const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

router.get("/test", (request, response) => {
    response.json({ message: "This is the user route." });
});

router.post("/register", (request, response) => {
    const { errors, isValid } = validateRegisterInput(request.body);
    
    if(!isValid) {
        return response.status(400).json(errros);
    }

    User.findOne({ email: request.body.email })
        .then(user => {
            if (user) {
                return response.status(400).json({ email: "Email has already been used" });
            }
            else {
                const newUser = new User({
                    handle: request.body.handle,
                    email: request.body.email,
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
                            .then(user => response.json(user))
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

    const email = request.body.email;
    const password = request.body.password;

    User.findOne({ email })
        .then(user => {
            if(!user) {
                return response.status(404).json({ email: "Invalid credentials" });
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch) {
                        const payload = {
                            id: user.id,
                            handle: user.handle,
                            email: user.email
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
                        return response.json({ message: "Success" });
                    } 
                    return response.status(400).json({ password: "Invalid credentials" })
                });
        });
});

module.exports = router;