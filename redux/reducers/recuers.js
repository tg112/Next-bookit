import { combineReducers } from "redux";
import { allRoomsReducer, roomDetailReducer } from "./roomReducers";

export const reducers = combineReducers({
  allRooms: allRoomsReducer,
  roomDetails: roomDetailReducer
});