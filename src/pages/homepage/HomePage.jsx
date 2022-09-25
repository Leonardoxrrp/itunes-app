import React from 'react';
import HomePageFilter from '../../components/homepage-filter/HomePageFilter';
import Podcasts from '../../components/podcasts/Podcasts';
import './homepage.css';

function HomePage() {
  return (
    <div className="homepage-container">
      <div className="homepage-filter-container">
        <HomePageFilter />
      </div>
      <div className="homepage-podcasts-container">
        <Podcasts />
      </div>
    </div>
  );
}

export default HomePage;
