import { combineReducers } from "redux";
import CharacterReducer from "./reducers/character.reducer";

const rootReducer = combineReducers({
  CharacterReducer,
});

export default rootReducer;
