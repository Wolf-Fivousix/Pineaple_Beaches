const express = require("express");
const router = express.Router();
const Beach = require("../../models/Beach");

router.get("/newBeachesSeeder", (request, response) => {
    // DATA_BASE_SEEDER();
    response.json("Mooooaaarrr Beacheeeeeesss");
});

router.get("/", (request, response) => {
    Beach.find()
        .then(beaches => response.json(beaches))
        .catch(errors => console.log(errors));
});

router.get(`/:beach_id`, (request, response) => {
    Beach.find({ _id: request.params.beach_id })
        .then((beach) => response.json(beach[0]))
        .catch((errors) => console.log(errors));
});

module.exports = router;




function DATA_BASE_SEEDER() {
// ============================================================
    // DO NOT COMMENT THIS IN!!
    // THIS IS A SECURE ROUTE THAT SEEDS THE DATA BASE!!
// ============================================================
    // new Beach({
    //     name: "Mavericks Beach",
    //     description: "Where all the surfers go for the big waves",
    //     location: "Half Moon Bay",
    //     crowdLevel: 8000,
    //     temperature: 40,
    //     lat: 37.495533,
    //     lon: -122.496677
    // }).save();

    // new Beach({
    //     name: "Ocean Beach",
    //     description: "Wide open beach with lots of social life.",
    //     location: "San Francisco",
    //     crowdLevel: 1,
    //     temperature: -20,
    //     lat: 37.759433,
    //     lon: -122.510659
    // }).save();

    // new Beach({
    //     name: "Pacifica State Beach",
    //     description: "Sunny as sun can be.",
    //     location: "Pacifica",
    //     crowdLevel: 666,
    //     temperature: 45,
    //     lat: 37.598881,
    //     lon: -122.502032
    // }).save();

    // new Beach({
    //     name: "Huntington State Beach",
    //     description: "Best beach you ever been to!",
    //     location: "Huntington",
    //     crowdLevel: 0,
    //     temperature: 35,
    //     lat: 33.639124,
    //     lon: -117.975915
    // }).save();

    // new Beach({
    //     name: "Main Beach",
    //     description: "Tourist beach for all new comers",
    //     location: "Laguna Beach",
    //     crowdLevel: 500,
    //     temperature: 75,
    //     lat: 33.542213,
    //     lon: -117.785605
    //     }).save();

    // new Beach({
    //     name: "1000 Steps Beach",
    //     description: "How many steps will you take to reach a beach?",
    //     location: "South Laguna",
    //     crowdLevel: 200,
    //     temperature: 65,
    //     lat: 33.49778,
    //     lon: -117.740971
    //     }).save();

    // new Beach({
    //     name: "Salt Creek Beach",
    //     description: "Lots of food nearby this area",
    //     location: "Dana Point",
    //     crowdLevel: 700,
    //     temperature: 68,
    //     lat: 33.47522,
    //     lon: -117.721686
    //     }).save();

    // new Beach({
    //     name: "Windansea Beach",
    //     description: "Great place to get away from people",
    //     location: "La Jolla",
    //     crowdLevel: 50,
    //     temperature: 65,
    //     lat: 32.829955,
    //     lon: -117.280893
    //     }).save();

    // new Beach({
    //     name: "Silver Strand State Beach",
    //     description: "Lots of parking",
    //     location: "San Diego",
    //     crowdLevel: 200,
    //     temperature: 75,
    //     lat: 32.634498,
    //     lon: -117.142575
    //     }).save();

    // new Beach({
    //     name: "Stinson Beach",
    //     description: "Nice place to take a walk after seeing the Golden Gate Bridge ",
    //     location: "Stinson Beach",
    //     crowdLevel: 300,
    //     temperature: 70,
    //     lat: 37.89889,
    //     lon: -122.645516
    //     }).save();

    return null;
};

// new Beach({
//     name: "",
//     description: "",
//     location: "",
//     crowdLevel: ,
//     temperature: ,
//     lat: ,
//     lon: 
//     }).save();