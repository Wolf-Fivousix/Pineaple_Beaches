const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateBeachInput(data) {
    let errors = {};

    // NAME
    data.name = validText(data.name) ? data.name : "";
    if (!Validator.isLength(data.name, { min: 3, max: 50 })) {
        errors.text = "Beach Name must be between 3 & 50 characters";
    }
    if (Validator.isEmpty(data.name)) {
        errors.text = "You HAVE to name it something...";
    }

    // DESCRIPTION
    data.description = validText(data.description) ? data.description : "";
    if (!Validator.isLength(data.description, { min: 5, max: 500 })) {
        errors.text = "Beach must be described between 5 & 500 characters";
    }
    if (Validator.isEmpty(data.description)) {
        errors.text = "You HAVE to describe something...";
    }

    // LOCATION
    data.location = validText(data.location) ? data.location : "";
    if (!Validator.isLength(data.location, { min: 5, max: 500 })) {
        errors.text = "Beach location needs at least 2 characters";
    }
    if (Validator.isEmpty(data.location)) {
        errors.text = "It HAS to be located somewhere...";
    }

    // CROWDLEVEL
    // No validations.

    // TEMPERATURE
    // No validations.

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};