import * as types from "../types/character.types";
import api from "../../api";

export const fetchCharacterAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: types.FETCH_CHARACTERS["REQUEST"] });
      const data = await api.character.getAll();
    } catch (error) {
      dispatch({ type: types.FETCH_CHARACTERS["FAILED"] });
    }
  };
};
