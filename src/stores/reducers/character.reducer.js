import * as types from "../types/character.types";

const initialState = {
  characters: [],
  status: "pending",
};

const CharacterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CHARACTERS["SUCCESS"]:
      return { ...state, characters: action.payload, status: "done" };
    case types.FETCH_CHARACTERS["FAILED"]:
      return { ...state, status: "error" };
    default:
      return { ...state };
  }
};
export default CharacterReducer;
