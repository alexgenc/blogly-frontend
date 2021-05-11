import axios from 'axios';
import {FETCH_TITLES} from "./types";


const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";
const API_URL = `${BASE_URL}/api/posts`;

// getTitles action
function getTitles(titles) {
  return {
    type: FETCH_TITLES,
    titles,
  };
}

// async fetchTitlesFromAPI thunk
export function fetchTitlesFromAPI() {
  return async function (dispatch) {
    const response = await axios.get(`${API_URL}`);
    return dispatch(getTitles(response.data));
  };
}


