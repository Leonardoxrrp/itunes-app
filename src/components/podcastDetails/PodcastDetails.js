import Linkify from 'linkify-react';
import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Context } from '../../context/AppContext';
import useGetDetails from '../../hooks/useGetDetails';

function PodcastDetails({ children }) {
  const navigate = useNavigate();
  const { podcastDetails } = useGetDetails();
  const { podcasts } = useContext(Context);
  const { podcastId } = useParams();
  const handleNavigation = () => {
    if (window.location.pathname.includes('episode')) return navigate(-1);
    return null;
  };
  const info = podcastDetails.find((detail) => detail.wrapperType === 'track');
  const description = podcasts?.entry?.find((podcast) => podcast.id.attributes['im:id'] === podcastId);
  return (
    <div className="podcastid-container">
      <div>
        <div className="podcast-left-side">
          <img onClick={handleNavigation} src={info?.artworkUrl600} alt={info?.collectionName} className="podcast-left-side-image podcast-navigation" />
          <div className="podcast-left-side-details">
            <div>
              <hr />
              <p onClick={handleNavigation} className="fw-bold podcast-navigation">{info?.collectionName}</p>
              <p>
                by
                <span onClick={handleNavigation} className="podcast-navigation">
                  {' '}
                  {info?.collectionName}
                </span>
              </p>
              <hr />
            </div>
            <div>
              <p className="fw-bold">Description</p>
              <Linkify>
                <p>{description?.summary.label}</p>
              </Linkify>
            </div>
          </div>
        </div>

      </div>
      {children}
    </div>
  );
}

export default PodcastDetails;
