import { csrfFetch } from "./csrf";

// type
const GET_ALL_SPOTS = "spots/GET_ALL_SPOTS"; // snakeCase for "spot/getAllSpots"
const GET_SPOT = "spots/GET_SPOT";
const CREATE_SPOT = "spots/CREATE_SPOT";
const DELETE_SPOT = "spots/DELETE_SPOT";
const UPDATE_SPOT = "spots/UPDATE_SPOT";

// action

const getAllSpots = (spots) => {
  return {
    type: GET_ALL_SPOTS,
    spots,
  };
};

const getSpot = (spot) => {
  return {
    type: GET_SPOT,
    spot,
  };
};

const createSpot = (spot) => {
  return {
    type: CREATE_SPOT,
    spot,
  };
};

const deleteSpot = (spotId) => {
  return {
    type: DELETE_SPOT,
    spotId,
  };
};

const updateSpot = (spot) => {
  return {
    type: UPDATE_SPOT,
    spot,
  };
};

//thunks

//get all spots on landing page THUNK
export const getAllSpotsThunk = () => async (dispatch) => {
  const res = await csrfFetch("/api/spots");

  if (res.ok) {
    let spots = await res.json();
    spots = spots.Spots;
    dispatch(getAllSpots(spots));

    return spots;
  }
};

//get one spot THUNK
export const getSpotThunk = (spotId) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${spotId}`);
  if (res.ok) {
    const spotDetails = await res.json();
    dispatch(getSpot(spotDetails));

    return spotDetails;
  } else {
    const errors = await res.json();
    return errors;
  }
};

// create spot thunks
export const createSpotThunk = (spot, img) => async (dispatch) => {
  const res = await csrfFetch("/api/spots", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(spot),
  });

  if (res.ok) {
    const newSpot = await res.json();
    for (let i = 0; i < img.length; i++) {
      if (img[i]) {
        await csrfFetch(`/api/spots/${newSpot.id}/images`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            url: img[i],
            preview: true,
          }),
        });
      }
    }
    dispatch(createSpot(newSpot));
    return newSpot;
  }
};

//delete spot thunks
export const deleteSpotThunk = (spotId) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(deleteSpot(spotId));
  }
};

export const updateSpotThunk = (spot, spotId) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(spot),
  });

  if (response.ok) {
    const spot = await response.json();
    dispatch(updateSpot(spot));
    return spot;
  }
};

//Initial State
const initialState = { allSpots: {}, singleSpot: {} };

//reducer
const spotReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_ALL_SPOTS:
      let allSpots = {};
      action.spots.forEach((spot) => (allSpots[spot.id] = spot));
      return { allSpots: { ...allSpots } };

    case GET_SPOT:
      newState = {
        ...state,
        allSpots: { ...state.allSpots },
        singleSpot: { ...state.singleSpot },
      };
      return { ...state, singleSpot: { ...action.spot } };
    case CREATE_SPOT: {
      let singleSpot = {};
      singleSpot = { ...action.spot };
      let newState = { ...state, singleSpot };
      newState.allSpots[action.spot.id] = { ...action.spot };
      return newState;
    }
    case DELETE_SPOT: {
      const newState = {
        ...state,
        allSpots: { ...state.allSpots },
        singleSpot: { ...state.singleSpot },
      };
      delete newState.allSpots[action.spotId];
      delete newState.singleSpot[action.spotId];
      return newState;
    }
    case UPDATE_SPOT: {
      const newState = {
        ...state,
        allSpots: { ...state.allSpots },
        singleSpot: { ...state.singleSpot },
      };

      newState.allSpots[action.spot.id] = {
        ...newState.allSpots[action.spotId],
        ...action.spot,
      };
    }
    default:
      return state;
  }
};

export default spotReducer;
