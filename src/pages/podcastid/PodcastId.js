import React from 'react';
import EpisodesTable from '../../components/episodes-table/EpisodesTable';
import PodcastDetails from '../../components/podcastDetails/PodcastDetails';
import useGetDetails from '../../hooks/useGetDetails';
import './podcastid.css';

function PodcastId() {
  const { podcastDetails } = useGetDetails();

  return (
    <PodcastDetails>
      <EpisodesTable episodes={podcastDetails} />
    </PodcastDetails>
  );
}

export default PodcastId;
