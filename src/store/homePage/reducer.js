const initialState = {
  loading: false,
  homepages: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "START_LOADING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "HOMEPAGE_FETCHED": {
      return {
        loading: false,
        homepages: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
