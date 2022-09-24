import React from 'react';
import { useState } from 'react';
import HomePageFilter from '../../components/homepage-filter/HomePageFilter';
import Podcasts from '../../components/podcasts/Podcasts';
import './homepage.css';

function HomePage() {
  const [filtering, setFiltering] = useState(null);
  return (
    <div className="homepage-container">
      <div className="homepage-filter-container">
        <HomePageFilter setFiltering={setFiltering} />
      </div>
      <div className="homepage-podcasts-container">
        <Podcasts filtering={filtering} />
      </div>
    </div>
  );
}

export default HomePage;
