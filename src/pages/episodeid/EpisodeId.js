import React from 'react';
import { useParams } from 'react-router-dom';
import PodcastDetails from '../../components/podcastDetails/PodcastDetails';
import useGetDetails from '../../hooks/useGetDetails';

function EpisodeId() {
  const { podcastDetails } = useGetDetails();
  const { episodeId } = useParams();
  console.log(podcastDetails[2]?.trackId, 'trackid');
  const episode = podcastDetails?.find((element) => element.trackId == episodeId);
  return (
    <PodcastDetails>
      <div className="podcastid-right-side">
        <div className="podcastid-right-side-details">
          <h2>{episode?.trackName}</h2>
          <p className="fst-italic">{episode?.description}</p>
          <p />
        </div>
      </div>
    </PodcastDetails>
  );
}

export default EpisodeId;
