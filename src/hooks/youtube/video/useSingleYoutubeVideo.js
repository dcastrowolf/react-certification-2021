import { useCallback, useReducer } from 'react';
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

export function useSingleYoutubeVideo() {
  const [state, dispatch] = useReducer(youtubeVideoReducer, initialState);

  const getRelatedVideos = useCallback(async ({ videoId }) => {
    try {
      const {
        gapi: {
          client: { youtube },
        },
      } = window;
      if (videoId) {
        dispatch({ type: SINGLE_VIDEO_REQUEST, payload: { videoId } });
        const { result } = await youtube.search.list({
          part: ['id,snippet'],
          maxResults: 20,
          relatedToVideoId: videoId,
          type: ['video'],
        });
        const newPayload = {
          videos: result.items.filter((v) => !!v.snippet),
          nextPageToken: result.nextPageToken,
        };
        dispatch({ type: SINGLE_VIDEO_SUCCESS, payload: newPayload });
      }
    } catch (error) {
      dispatch({ type: SINGLE_VIDEO_FAIL, payload: { error } });
    }
  }, []);

  return { ...state, getRelatedVideos };
}
