export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  // token:'BQDqC5QA-dRc0C6NH7zV9epfgiDgIoIra7LLb89u4_9tuUItM_nlTRCKFw9eKnE5x9ArLVsvVQrxRgenw8vR9EGk1iW0NzfnoV3A-XQls-HE4YzJO-4N7UFft_wpQJh1GyTu2jTwe5xB2rQ89lPMrFmmoqyRCKfo'
};

export const DataReducer = (state, action) => {
    console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "GET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};
