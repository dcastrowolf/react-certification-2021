import { useReducer } from 'react';
import { youtubeVideoReducer } from './youtubeVideoReducer';
import {
  SINGLE_VIDEO_FAIL,
  SINGLE_VIDEO_REQUEST,
  SINGLE_VIDEO_SUCCESS,
} from './actionTypes';

const initialState = {
  videoId: null,
  isLoading: false,
  relatedVideos: [],
  nextPageToken: null,
};

export function useSingleYoutubeVideo({ videoId }) {
  const [state, dispatch] = useReducer(youtubeVideoReducer, initialState);

  const getRelatedVideos = async () => {
    try {
      const {
        gapi: {
          client: { youtube },
        },
      } = window;
      dispatch({ type: SINGLE_VIDEO_REQUEST, payload: { videoId } });
      const { result } = await youtube.search.list({
        part: ['snippet'],
        maxResults: 20,
        relatedToVideoId: videoId,
        type: ['video'],
      });
      const newPayload = {
        videos: result.items,
        nextPageToken: result.nextPageToken,
      };
      dispatch({ type: SINGLE_VIDEO_SUCCESS, payload: newPayload });
    } catch (error) {
      dispatch({ type: SINGLE_VIDEO_FAIL, payload: { error } });
    }
  };

  return { ...state, getRelatedVideos };
}
