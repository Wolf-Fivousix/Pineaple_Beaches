import * as beachUtils from "../util/beach_api_util";
import { RECEIVE_BEACH_REVIEWS } from "./review_actions";

export const RECEIVE_ALL_BEACHES = "RECEIVE_ALL_BEACHES";
export const RECEIVE_NAMED_BEACHES = "RECEIVE_NAMED_BEACHES";
export const RECEIVE_BEACH = "RECEIVE_BEACH";

const receiveAllBeaches = (beaches) => ({
    type: RECEIVE_ALL_BEACHES,
    beaches
});

const receiveNamedBeaches = (beaches) => ({
    type: RECEIVE_NAMED_BEACHES,
    beaches
});

const receiveBeach = (beach) => ({
    type: RECEIVE_BEACH,
    beach
})

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

export const fetchBeachById = (beachId) => dispatch => (
    beachUtils.fetchBeachById(beachId)
        .then(beach => {
            beach = formatDataById(beach);
            dispatch(receiveBeach(beach));
            return beach[Object.keys(beach)[0]];
        })
        .catch(errors => console.log(errors))
);

export const updateBeachTemperature = (payload) => dispatch => (
    beachUtils.updateBeachTemperature(payload)
        .then(() => console.log("Success"))
        .catch(errors => console.log(errors))
);

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

function formatDataById(payload) {
    const id = payload.data._id;
    return { [id]: payload.data };
}