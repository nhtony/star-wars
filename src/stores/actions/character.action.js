import * as types from "../types/character.types";
import api from "../../api";

export const fetchCharacterAction = () => {
  return async (dispatch) => {
    try {
      const { data } = await api.character.getAll();
      dispatch({ type: types.FETCH_CHARACTERS["SUCCESS"], payload: data });
    } catch (error) {
      dispatch({ type: types.FETCH_CHARACTERS["FAILED"] });
    }
  };
};
