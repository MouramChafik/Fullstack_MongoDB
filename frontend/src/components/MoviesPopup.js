import React from 'react';
import colors from '../colors';

function MoviesPopup({ movies, userName, isOpen, onClose }) {
  if (!isOpen) return null;

  console.log('MoviesPopup rendered with movies:', movies);
  return (
    <div onClick={onClose} style={overlayStyle}>
      <div onClick={(e) => e.stopPropagation()} style={popupStyle}>
        {/* Header fixe avec titre et bouton de fermeture */}
        <div style={headerStyle}>
          <h2 style={{ margin: 0 }}>Films notés de : <span style={spanUserStyle} >{userName}</span> </h2>
          <button onClick={onClose} style={closeButtonStyle} aria-label="Fermer">×</button>
        </div>

        {/* Liste des films notés en 3 colonnes */}
        <ul style={listStyle}>
          {movies.map((m, i) => (
            <li key={`${userName}-${i}`} style={itemStyle}>
              <strong>Film id :</strong> {m._id  || 'Inconnu'}<br />
              <strong>Titre :</strong> {m.title ?? 'N/A'}
              <strong>Note :</strong> {m.rating ?? 'N/A'}
            </li>
          ))}
        </ul>

        {/* Bouton de fermeture en bas */}
        <div style={{ textAlign: 'center' }}>
          <button onClick={onClose} style={footerButtonStyle}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}

export default MoviesPopup;


const overlayStyle = {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const popupStyle = {
  backgroundColor: 'white',
  borderRadius: '8px',
  padding: '20px',
  maxWidth: '600px',
  width: '90%',
  maxHeight: '80vh',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'sticky',  // reste en haut même si on scrolle
  top: 0,
  backgroundColor: 'white',
  zIndex: 1,
};

const closeButtonStyle = {
  backgroundColor: 'red',
  color: 'white',
  border: 'none',
  borderRadius: '50%',
  width: '30px',
  height: '30px',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '16px',
  lineHeight: '30px',
  textAlign: 'center',
};

const listStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '10px',
  margin: '10px 0',
  padding: 0,
  listStyleType: 'none',
  overflowY: 'auto',
  flex: 1, // occupe tout l'espace disponible verticalement
};

const itemStyle = {
  background: '#f8f9fa',
  padding: '10px',
  borderRadius: '6px',
};

const footerButtonStyle = {
  marginTop: '10px',
  padding: '8px 16px',
  backgroundColor: '#007bff',
  color: '#ffffff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: '500',
};

const spanUserStyle = {
  color: '#007bff',
  fontWeight: 'bold',
};