import React, { createContext, useMemo } from 'react';
import useGetDetails from '../hooks/useGetDetails';
import useGetPodcasts from '../hooks/useGetPodcasts';
import usePointer from '../hooks/usePointer';

const Context = createContext(null);

function AppContext({ children }) {
  const { pointer, setPointer } = usePointer();
  const { podcastDetails, setPodcastDetails } = useGetDetails();
  const {
    podcasts, setPodcasts, searchResults, setSearchResults,
  } = useGetPodcasts();
  const value = useMemo(() => ({
    pointer,
    setPointer,
    podcasts,
    setPodcasts,
    searchResults,
    setSearchResults,
    podcastDetails,
    setPodcastDetails,
  }), [pointer, setPointer, podcasts, setPodcasts, searchResults, setSearchResults,
    podcastDetails, setPodcastDetails]);
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

export { AppContext, Context };
