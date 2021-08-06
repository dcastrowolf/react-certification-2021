import {
  SINGLE_VIDEO_FAIL,
  SINGLE_VIDEO_REQUEST,
  SINGLE_VIDEO_SUCCESS,
} from './actionTypes';

export function youtubeVideoReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case SINGLE_VIDEO_SUCCESS:
      return {
        ...state,
        relatedVideos: [...payload.videos],
        nextPageToken: payload.nextPageToken,
        isLoading: false,
      };
    case SINGLE_VIDEO_REQUEST:
      return { ...state, isLoading: true, videoId: payload.videoId };
    case SINGLE_VIDEO_FAIL:
      return { ...state, error: payload };
    default:
      return state;
  }
}
