import * as beachUtils from "../util/beach_api_util";

export const RECEIVE_ALL_BEACHES = "RECEIVE_ALL_BEACHES";
export const RECEIVE_NAMED_BEACHES = "RECEIVE_NAMED_BEACHES";

const receiveAllBeaches = (beaches) => ({
    type: RECEIVE_ALL_BEACHES,
    beaches
});

const receiveNamedBeaches = (beaches) => ({
    type: RECEIVE_NAMED_BEACHES,
    beaches
});

export const fetchAllBeaches = () => dispatch => (
    beachUtils.fetchAllBeaches()
        .then((payload) => {
            const beaches = formatDataAsIdKeys(payload);
            dispatch(receiveAllBeaches(beaches));
        })
        .catch(errors => console.log(errors))
);

export const fetchBeachByName = (beachName) => dispatch => (
    beachUtils.fetchAllBeaches()
        .then(payload => {
            let beaches = formatDataAsIdKeys(payload);
            beaches = reduceByName(beaches, beachName);
            dispatch(receiveNamedBeaches(beaches));
        })
        .catch(errors => console.log(errors))
);

// export const fetchBeachById = (beachId) => dispatch => (
//     beachUtils.fetchBeachById(beachId)
//         .then(payload => {

//         })
//         .catch(errors => console.log(errors))
// );


// Helper methods to format the payload.
function formatDataAsIdKeys(payload) {
    const ids = payload.data.map(beach => beach._id);
    const beaches = { };

    for (let i = 0; i < ids.length; ++i) {
        beaches[ids[i]] = payload.data[i];
    }

    return beaches
};

function reduceByName(beaches, name) {
    const filteredBeaches = { };
    const keys = Object.keys(beaches);

    for (const key of keys) {
        if(beaches[key].name.toLowerCase().includes(name.toLowerCase())) {
            filteredBeaches[key] = beaches[key];
        }
    }

    return filteredBeaches;
};