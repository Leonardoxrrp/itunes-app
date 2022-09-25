import React from 'react';
import PodcastDetails from '../../components/podcastDetails/PodcastDetails';
import useGetDetails from '../../hooks/useGetDetails';

function EpisodeId() {
  const { podcastDetails } = useGetDetails();
  return (
    <PodcastDetails>
      <p>test</p>
    </PodcastDetails>
  );
}

export default EpisodeId;
