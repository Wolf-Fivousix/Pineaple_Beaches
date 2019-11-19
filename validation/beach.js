const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateBeachInput(data) {
    let errors = {};

    // NAME
    data.name = validText(data.name) ? data.name : "";
    if (!Validator.isLength(data.name, { min: 3, max: 50 })) {
        errors.name = "Beach Name must be between 3 & 50 characters";
    }
    if (Validator.isEmpty(data.name)) {
        errors.name = "You HAVE to name it something...";
    }

    // DESCRIPTION
    data.description = validText(data.description) ? data.description : "";
    if (!Validator.isLength(data.description, { min: 5, max: 500 })) {
        errors.description = "Beach must be described between 5 & 500 characters";
    }
    if (Validator.isEmpty(data.description)) {
        errors.description = "You HAVE to describe something...";
    }

    // LOCATION
    data.location = validText(data.location) ? data.location : "";
    if (!Validator.isLength(data.location, { min: 5, max: 500 })) {
        errors.location = "Beach location needs at least 2 characters";
    }
    if (Validator.isEmpty(data.location)) {
        errors.location = "It HAS to be located somewhere...";
    }

    // CROWDLEVEL
    // No validations.

    // TEMPERATURE
    data.temperature = typeof data.temperature === "number" ? data.temperature : "";
    // Make sure this actually worked.
    debugger;
    if (Validator.isEmpty(data.temperature)) {
        errors.temperature = "It HAS a temperature, give it!";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};