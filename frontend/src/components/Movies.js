import React, { useState } from 'react';

function Movies({ movies = [] }) {
  const itemsPerPage = 10;
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
        <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1}>Précédent</button>
        <span>Page {currentPage} / {totalPages}</span>
        <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>Suivant</button>
      </div>
    </div>
  );
}

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '12px',
  width: '200px',
  backgroundColor: '#f9f9f9',
};

const paginationStyle = {
  marginTop: '20px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  justifyContent: 'center',
};

export default Movies;
