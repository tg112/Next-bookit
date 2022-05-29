import { ALL_ROOMS_FAIL, ALL_ROOMS_SUCCESS, ALL_ROOM_DETAIL_FAIL, ALL_ROOM_DETAIL_SUCCESS, CLEAR_ERRORS } from "../constants/roomConstants";

// All rooms reducer
export const allRoomsReducer = (state = { room: [] }, action) => {
  switch (action.type) {
    case ALL_ROOMS_SUCCESS:
      return {
        roomsCount: action.payload.roomsCount,
        resPerPage: action.payload.resPerPage,
        filteredRoomsCount: action.payload.filteredRoomsCount,
        rooms: action.payload.rooms
      }
    case ALL_ROOMS_FAIL:
      return {
        error: action.payload
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      }
    default:
      return state;
  }
}

// details
export const roomDetailReducer = (state = { room: {} }, action) => {
  switch (action.type) {
    case ALL_ROOM_DETAIL_SUCCESS:
      return {
        room: action.payload
      }
    case ALL_ROOM_DETAIL_FAIL:
      return {
        error: action.payload
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      }
    default:
      return state;
  }
}