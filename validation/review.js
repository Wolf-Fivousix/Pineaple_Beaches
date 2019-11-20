const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateReviewInput(data) {
    let errors = {};

    // BODY
    data.post = validText(data.post) ? data.post : "";
    if (!Validator.isLength(data.post, { min: 5, max: 500 })) {
        errors.post = "Beach review must be between 5 & 500 characters";
    }
    if (Validator.isEmpty(data.post)) {
        errors.post = "You HAVE to say something...";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};