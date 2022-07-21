import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  mediaUrl: null,
  loading: null,
  error: null
};

export const MediaContext = createContext(INITIAL_STATE);

const MediaReducer = (state, action) => {
  switch (action.type) {
    case "MEDIA_SUCCESS":
      return {
        mediaUrl: action.payload,
        loading: true,
        error: null
      };
    case "MEDIA__FAILURE":
      return {
        mediaUrl: null,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export const MediaContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MediaReducer, INITIAL_STATE);

  return (
    <MediaContext.Provider
      value={{
        mediaUrl: state.mediaUrl,
        loading: state.loading,
        error: state.error,
        dispatch
      }}
    >
      {children}
    </MediaContext.Provider>
  );
};
