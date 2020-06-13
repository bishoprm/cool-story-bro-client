import axios from "axios";

import { apiUrl } from "../../config/constants";

export function startLoading() {
  return {
    type: "START_LOADING",
  };
}

export function homePageFetched(homePageData) {
  return {
    type: "HOMEPAGE_FETCHED",
    payload: homePageData,
  };
}

//thunk action
export async function fetchHomePageData(dispatch) {
  dispatch(startLoading());
  const res = await axios.get(`${apiUrl}/homepages`);

  const homePageData = res.data;

  dispatch(homePageFetched(homePageData));
}
