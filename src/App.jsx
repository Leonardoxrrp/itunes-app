import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import EpisodeId from './pages/episodeid/EpisodeId';
import HomePage from './pages/homepage/HomePage';
import PodcastId from './pages/podcastid/PodcastId';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/podcast/:podcastId" element={<PodcastId />} />
        <Route path="/podcast/:podcastId/:episodeId" element={<EpisodeId />} />
      </Routes>
    </Layout>
  );
}

export default App;
