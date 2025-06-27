import React, { useState } from 'react';
import colors from '../colors';

function Movies({ movies = [] }) {
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(movies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentMovies = movies.slice(startIndex, startIndex + itemsPerPage);
  
    console.log("Films affichés pour la page actuelle :", currentMovies);

  return (
    <div>
      <h2>Films</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
        {currentMovies.map((m, idx) => (
          <div key={idx} style={cardStyle}>
            <h3>{m.title}</h3>
            <p><strong>Genres:</strong> {Array.isArray(m.genres) ? m.genres.join(', ') : m.genres}</p>
            {m.poster && <img src={m.poster} alt={m.title} style={{ width: '100%', height: 'auto' }} />}
          </div>
        ))}
      </div>
      <div style={paginationStyle}>
        <button
          style={btnpaginationPrevious}
          onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Précédent
        </button>
        <span style={pageIndicatorStyle} >Page {currentPage} / {totalPages}</span>
        <button
          style={btnpaginationNext}
          onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Suivant
        </button>
      </div>
    </div>
  );
}

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '12px',
  width: '200px',
  backgroundColor: 'rgb(240, 248, 255)',
};

const paginationStyle = {
  marginTop: '20px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  justifyContent: 'center',
};
const btnBase = {
  padding: '10px 20px',
  borderRadius: '8px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'rgb(240, 248, 255)',
  background: 'rgb(145, 196, 244)',
  color: '#000000',
  cursor: 'pointer',
  fontWeight: '500',
  fontSize: '14px',
  boxShadow: '0 2px 6px rgba(0, 123, 255, 0.2)',
};

const btnpaginationPrevious = {
  ...btnBase,
};

const btnpaginationNext = {
  ...btnBase,
  marginLeft: '10px',
};

const pageIndicatorStyle = {
  padding: '6px 12px',
  color: 'rgb(145, 196, 244)',
  fontWeight: '800',
  fontSize: '20px',
  fontGrid: 'Arial, sans-serif',
};

export default Movies;
