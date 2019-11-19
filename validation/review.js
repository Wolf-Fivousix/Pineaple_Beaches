const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateBeachInput(data) {
    let errors = {};

    // BODY
    data.body = validText(data.body) ? data.body : "";
    if (!Validator.isLength(data.body, { min: 5, max: 500 })) {
        errors.body = "Beach review must be between 5 & 500 characters";
    }
    if (Validator.isEmpty(data.body)) {
        errors.body = "You HAVE to say something...";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};