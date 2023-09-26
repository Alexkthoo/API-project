import { csrfFetch } from "./csrf";

// type
const GET_ALL_SPOTS = "spot/getAllSpots"; // snakeCase for "spot/getAllSpots"

// action
const getAllSpots = (spots) => {
  return {
    type: GET_ALL_SPOTS,
    spots,
  };
};

//thunks
export const getAllSpotsThunk = () => async (dispatch) => {
  const res = await csrfFetch("/api/spots");

  if (res.ok) {
    let spots = await res.json();
    spots = spots.Spots;
    dispatch(getAllSpots(spots));
    return spots;
  }
};

//Initial State
const initialState = { allSpots: {} };

//reducer
const spotReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SPOTS: {
      let allSpots = {};
      action.spots.forEach((spot) => (allSpots[spot.id] = spot));
      return { allSpots: { ...allSpots } };
    }
    default:
      return state;
  }
};

export default spotReducer;
