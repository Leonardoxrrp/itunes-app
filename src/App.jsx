import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { AppContext } from './context/AppContext';
import EpisodeId from './pages/episodeid/EpisodeId';
import HomePage from './pages/homepage/HomePage';
import PodcastId from './pages/podcastid/PodcastId';

function App() {
  return (
    <AppContext>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/podcast/:podcastId" element={<PodcastId />} />
          <Route path="/podcast/:podcastId/episode/:episodeId" element={<EpisodeId />} />
        </Routes>
      </Layout>
    </AppContext>
  );
}

export default App;
