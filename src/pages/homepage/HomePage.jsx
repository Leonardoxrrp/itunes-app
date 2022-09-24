import React from 'react';
import HomePageFilter from '../../components/homepage-filter/HomePageFilter';
import Podcasts from '../../components/podcasts/Podcasts';
import useGetPodcasts from '../../hooks/useGetPodcasts';
import './homepage.css';

function HomePage() {
  const { podcasts, setSearchResults, searchResults } = useGetPodcasts();
  return (
    <div className="homepage-container">
      <div className="homepage-filter-container">
        <HomePageFilter
          searchResults={searchResults}
          podcasts={podcasts}
          setSearchResults={setSearchResults}
        />
      </div>
      <div className="homepage-podcasts-container">
        <Podcasts
          podcasts={podcasts}
          searchResults={searchResults}
        />
      </div>
    </div>
  );
}

export default HomePage;
