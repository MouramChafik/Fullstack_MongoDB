import React, { useState } from "react";
import axios from "axios";

function SearchBar({ activeView, onSelect }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      try {
        const res = await axios.get(
          `http://localhost:5000/search?type=${activeView}&q=${value}`
        );
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
    setQuery("");
    setSuggestions([]);
    onSelect(item);
  };

  return (
    <div style={{ position: "relative", width: "200px", marginRight: "20px" }}>
      <input
        type="text"
        placeholder={`Rechercher des ${activeView}`}
        value={query}
        onChange={handleChange}
        style={inputStyle}
      />
      <div style={{ position: "relative", width: "215px" }}>
       {suggestions.length > 0 ? (
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
) : query.length > 0 ? (
  <div style={{ padding: '8px', color: 'red', textAlign: 'center', fontSize: '14px',  }}>
    Aucun résultat trouvé
  </div>
) : null}

      </div>
    </div>
  );
}

export default SearchBar;

const inputStyle = {
  width: "100%",
  padding: "6px 8px",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

const suggestionsStyle = {
  position: "absolute",
  width: "100%",
  top: "100%",
  left: 0,
  right: 0,
  background: "white",
  color: "#000",
  border: "1px solid #ccc",
  boxShadow: "10px 10px 8px rgba(0, 0, 0, 0.1)",
  maxHeight: "150px",
  overflowY: "auto",
  listStyleType: "none",
  margin: 0,
  padding: 0,
  zIndex: 10,
};

const suggestionItemStyle = {
  padding: "6px 8px",
  fontSize: "14px",
  fontfamily: "Roboto, sans-serif",
  color: "rgb(0, 123, 255)",
  cursor: "pointer",
};
