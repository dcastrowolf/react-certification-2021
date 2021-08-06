import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCESS,
  RESULTS_VIDEOS_FAIL,
  RESULTS_VIDEOS_REQUEST,
  RESULTS_VIDEOS_SUCESS,
} from './actionTypes';

export function youtubeVideosReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case HOME_VIDEOS_SUCESS:
    case RESULTS_VIDEOS_SUCESS:
      return {
        ...state,
        videos: [...payload.videos],
        nextPageToken: payload.nextPageToken,
        isLoading: false,
      };
    case HOME_VIDEOS_REQUEST:
    case RESULTS_VIDEOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case HOME_VIDEOS_FAIL:
    case RESULTS_VIDEOS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
}
