import React, { useState } from 'react';
import MoviesPopup from './/MoviesPopup';

function Users({ users = [] }) {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null); 

  const totalPages = Math.ceil(users.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentUsers = users.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <h2>Utilisateurs</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
        {currentUsers.map((u) => (
          <div key={u._id || u.name} style={cardStyle}>
            <h3>{u.name || 'Nom inconnu'}</h3>
            <p><strong>Genre :</strong> {u.gender || 'Non précisé'}</p>
            <p><strong>Âge :</strong> {u.age ?? 'Inconnu'}</p>
            <p><strong>Métier :</strong> {u.occupation || 'Non précisé'}</p>

            {Array.isArray(u.movies) && u.movies.length > 0 && (
              <button
                style={btnBase}
                onClick={() => setSelectedUser(u)}
              >
                Voir films notés
              </button>
            )}
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

      {/* Popup films notés */}
      {selectedUser && (
        <MoviesPopup
          movies={selectedUser.movies}
          userName={selectedUser.name || 'Utilisateur'}
          isOpen={!!selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
}

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '12px',
  width: '250px',
  backgroundColor: '#f0f8ff',
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


export default Users;
