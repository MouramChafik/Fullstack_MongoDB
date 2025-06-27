import React, { useState } from 'react';
import MoviesPopup from './/MoviesPopup';
import colors from '../colors';
import avatarImage from '../assets/images/profile.avif';

function Users({ users = [] }) {
  const itemsPerPage = 8;
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
    <div key={u._id || u.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={cardStyle}>
        <div style={circleStyle}>
         <img
        src={avatarImage}
        alt={u.name}
        style={imageStyle}
      />
        </div>
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
        <span style={pageIndicatorStyle} >{currentPage} / {totalPages}</span>
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
  backgroundColor: colors.secondary,
  color: colors.white,
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
  borderColor: colors.success,
  background: colors.success,
  color: '#ffffff',
  cursor: 'pointer',
  fontWeight: 'bolder',
  fontSize: '14px',
  boxShadow: '0 2px 6px rgba(0, 123, 255, 0.2)',
};

const btnpaginationPrevious = {
  ...btnBase,
  background: colors.fourth,
  borderColor: colors.fourth,
};

const btnpaginationNext = {
  ...btnBase,
  marginLeft: '10px',
    background: colors.fourth,
    borderColor: colors.fourth,

};

const pageIndicatorStyle = {
  padding: '6px 12px',
  color: colors.success,
  fontWeight: '800',
  fontSize: '20px',
  fontGrid: 'Arial, sans-serif',
};
const imageStyle = {
   position: 'absolute',       
   top: -21,
   left: -68,
   height: 143,
   width: 'auto',            
   objectFit: 'cover', 
};

const circleStyle = {
  width: '100px',            
  height: '100px',
  borderRadius: '50%',       
  overflow: 'hidden',        
  position: 'relative',       
  border: '2px solid #007bff', 
};

export default Users;
