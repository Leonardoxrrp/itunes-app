import React from 'react';
import useGetDetails from '../../hooks/useGetDetails';

function PodcastDetails({ children }) {
  const { podcastDetails } = useGetDetails();
  const info = podcastDetails.find((detail) => detail.artworkUrl600);

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
            </div>
          </div>
        </div>

      </div>
      <div className="podcastid-right-side">
        <div className="podcastid-right-side-episodes">
          <p className="fw-bold podcastid-episodes-text">
            <span>Episodes</span>
            :
            {podcastDetails.length}
          </p>
        </div>
        <div className="podcastid-right-side-details">
          {children}
        </div>
      </div>
    </div>
  );
}

export default PodcastDetails;
