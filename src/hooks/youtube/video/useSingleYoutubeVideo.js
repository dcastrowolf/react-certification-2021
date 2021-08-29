import { useCallback, useReducer } from 'react';
import { youtubeSingleVideoState, youtubeVideoReducer } from './youtubeVideoReducer';
import {
  GET_SINGLE_VIDEO_DATA,
  SINGLE_VIDEO_FAIL,
  SINGLE_VIDEO_REQUEST,
  SINGLE_VIDEO_SUCCESS,
} from './actionTypes';

export function useSingleYoutubeVideo() {
  const [state, dispatch] = useReducer(youtubeVideoReducer, youtubeSingleVideoState);

  const getSingleVideo = useCallback(async (videoId) => {
    try {
      const {
        gapi: {
          client: { youtube },
        },
      } = window;
      const { result } = await youtube.videos.list({
        part: ['id,snippet'],
        id: videoId,
      });
      const currentVideo = result.items[0];
      return currentVideo;
    } catch (error) {
      return null;
    }
  }, []);

  const getRelatedVideos = useCallback(
    async ({ videoId }) => {
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
          const video = await getSingleVideo(videoId);
          dispatch({ type: GET_SINGLE_VIDEO_DATA, payload: { video } });
        }
      } catch (error) {
        dispatch({ type: SINGLE_VIDEO_FAIL, payload: { error } });
      }
    },
    [getSingleVideo]
  );

  return { ...state, getRelatedVideos };
}
