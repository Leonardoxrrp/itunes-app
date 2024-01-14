import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/AppContext';
import './header.css';

function Header() {
  const { pointer, setPointer } = useContext(Context);
  useEffect(() => {
    setTimeout(() => {
      setPointer(false);
    }, 500);
  }, [pointer]);
  return (
    <div className="header-container">
      <div className="header-text">
        <h3 className="header-title fw-bold"><Link onClick={() => setPointer(true)} to="/" style={{ textDecoration: 'none' }}>Podcaster</Link></h3>
        {pointer && <div className="header-animation"><div /></div>}
      </div>
      <hr />
    </div>
  );
}

export default Header;
