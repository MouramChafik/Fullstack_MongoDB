import React, { useState } from 'react';
import axios from 'axios';

function SearchBar({ onSearch, activeView }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = async (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 0) {
      try {
        const res = await axios.get(`http://localhost:5000/search?type=${activeView}&q=${value}`);
        setSuggestions(res.data.results || []);
      } catch (err) {
        console.error(err);
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (item) => {
    setQuery(item.name || item.title || '');
    setSuggestions([]);
    onSearch(item); // passer l'item sélectionné au parent
  };

  return (
    <div style={{ position: 'relative', width: '200px' }}>
      <input
        type="text"
        placeholder={`Rechercher des ${activeView}`}
        value={query}
        onChange={handleChange}
        style={inputStyle}
      />
      {suggestions.length > 0 && (
        <ul style={suggestionsStyle}>
          {suggestions.map((item, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(item)}
              style={suggestionItemStyle}
            >
              {item.name || item.title || 'Inconnu'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;

/* 🎨 Styles */
const inputStyle = {
  width: '100%',
  padding: '6px 8px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const suggestionsStyle = {
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  background: 'white',
  border: '1px solid #ccc',
  maxHeight: '150px',
  overflowY: 'auto',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  zIndex: 10,
};

const suggestionItemStyle = {
  padding: '6px 8px',
  cursor: 'pointer',
};
