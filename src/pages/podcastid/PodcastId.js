import React from 'react';
import EpisodesTable from '../../components/episodes-table/EpisodesTable';
import PodcastDetails from '../../components/podcastDetails/PodcastDetails';
import useGetDetails from '../../hooks/useGetDetails';
import './podcastid.css';

function PodcastId() {
  const { podcastDetails } = useGetDetails();

  return (
    <PodcastDetails>
      <div className="podcastid-right-side">
        <div className="podcastid-right-side-episodes">
          <p className="fw-bold podcastid-episodes-text">
            <span>Episodes</span>
            :
            {podcastDetails.length}
          </p>
        </div>
        <div className="podcastid-right-side-details">
          <EpisodesTable episodes={podcastDetails} />
        </div>
      </div>
    </PodcastDetails>

  );
}

export default PodcastId;
