import axios from "axios";
import absoluteUrl from "next-absolute-url";
import {
  ALL_ROOMS_FAIL,
  ALL_ROOMS_SUCCESS,
  ALL_ROOM_DETAIL_FAIL,
  ALL_ROOM_DETAIL_SUCCESS,
  CLEAR_ERRORS
} from "../constants/roomConstants";

// Get all rooms
export const getRooms = (req) => async (dispatch) => {
  try {

    const { origin } = absoluteUrl(req);
    const { data } = await axios.get(`${origin}/api/rooms`);
    dispatch({
      type: ALL_ROOMS_SUCCESS,
      payload: data
    });
  } catch (e) {
    dispatch({
      type: ALL_ROOMS_FAIL,
      payload: e.response.data.message
    })
  }
}

// Get room deetail
export const getRoomDetails = (req, id) => async (dispatch) => {
  try {

    const { origin } = absoluteUrl(req);
    const { data } = await axios.get(`${origin}/api/rooms/${id}`);
    dispatch({
      type: ALL_ROOM_DETAIL_SUCCESS,
      payload: data.room
    });
  } catch (e) {
    dispatch({
      type: ALL_ROOM_DETAIL_FAIL,
      payload: e.response.data.message
    })
  }
}


// clear errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS
  });
}