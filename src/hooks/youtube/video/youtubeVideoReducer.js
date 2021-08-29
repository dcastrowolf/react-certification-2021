import {
  SINGLE_VIDEO_FAIL,
  SINGLE_VIDEO_REQUEST,
  SINGLE_VIDEO_SUCCESS,
  GET_SINGLE_VIDEO_DATA,
} from './actionTypes';

export const youtubeSingleVideoState = {
  videoId: null,
  video: null,
  isLoading: false,
  relatedVideos: [],
  nextPageToken: null,
};

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
    case GET_SINGLE_VIDEO_DATA:
      return { ...state, video: payload.video };
    default:
      return state;
  }
}
