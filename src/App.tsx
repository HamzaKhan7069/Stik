import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { BrowsePage } from './pages/BrowsePage';
import { GameDetailPage } from './pages/GameDetailPage';
import { DashboardPage } from './pages/DashboardPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="browse" element={<BrowsePage />} />
          <Route path="game/:id" element={<GameDetailPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          {/* Fallback to home */}
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
