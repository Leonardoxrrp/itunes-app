import React from 'react';
import Header from '../header/Header';
import './layout.css';

function Layout({ children }) {
  return (
    <div className="layout-container">
      <Header />
      {children}
    </div>

  );
}

export default Layout;
