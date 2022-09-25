import React from 'react';
import { useParams } from 'react-router-dom';
import useGetDetails from '../../hooks/useGetDetails';
import useGetPodcasts from '../../hooks/useGetPodcasts';

function PodcastDetails({ children }) {
  const { podcastDetails } = useGetDetails();
  const { podcasts } = useGetPodcasts();
  const { podcastId } = useParams();
  const info = podcastDetails.find((detail) => detail.wrapperType === 'track');
  const description = podcasts?.entry?.find((podcast) => podcast.id.attributes['im:id'] === podcastId);
  return (
    <div className="podcastid-container">
      <div>
        <div className="podcast-left-side">
          <img src={info?.artworkUrl600} alt={info?.collectionName} className="podcast-left-side-image" />
          <div className="podcast-left-side-details">
            <div>
              <hr />
              <p className="fw-bold">{info?.collectionName}</p>
              <p>
                by
                <span>
                  {' '}
                  {info?.collectionName}
                </span>
              </p>
              <hr />
            </div>
            <div>
              <p className="fw-bold">Description</p>
              <p>{description?.summary.label}</p>
            </div>
          </div>
        </div>

      </div>
      {children}
    </div>
  );
}

export default PodcastDetails;
