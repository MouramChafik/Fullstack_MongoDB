import React from 'react';
import SearchBar from './SearchBar';
import colors from '../colors';

function Navbar({ activeView, setActiveView, onSearch, onSelect }) {
  return (
    <nav style={navbarStyle}>
      <div style={linksStyle}>
        <button
          onClick={() => setActiveView('movies')}
          style={activeView === 'movies' ? linkActiveStyle : linkStyle}
        >
          Films
        </button>
        <button
          onClick={() => setActiveView('users')}
          style={activeView === 'users' ? linkActiveStyle : linkStyle}
        >
          Utilisateurs
        </button>
      </div>
      <SearchBar onSearch={onSearch} onSelect={onSelect} activeView={activeView} />
    </nav>
  );
}

export default Navbar;

/* 🎨 Styles */
const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  color: 'white',
  marginBottom: '20px',
};

const linksStyle = {
  display: 'flex',
  gap: '10px',
};

const linkStyle = {
  padding: '8px 16px',
  border: 'none',
  borderRadius: '4px',
  background: 'white',
  color: '#007bff',
  cursor: 'pointer',
  fontWeight: '500',
};

const linkActiveStyle = {
  ...linkStyle,
  background: '#0056b3',
  color: 'white',
};
