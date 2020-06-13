import axios from "axios";
import { apiUrl } from "../../config/constants";

function homepageDetailsFetched(homepage) {
  return {
    type: "HOMEPAGE_DETAILS_FETCHED",
    payload: homepage,
  };
}

export const fetchHomepageById = (id) => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/homepages/${id}`);
    console.log("What's response", response);
    dispatch(homepageDetailsFetched(response.data.homepage));
  };
};
