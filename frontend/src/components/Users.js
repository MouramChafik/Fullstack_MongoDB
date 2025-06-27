import React, { useState } from 'react';

function Users({ users = [] }) {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(users.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentUsers = users.slice(startIndex, startIndex + itemsPerPage);

  console.log("Utilisateurs reçus :", currentUsers);

  return (
    <div>
      <h2>Utilisateurs</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {currentUsers.map((u) => (
          <div key={u._id || u.name} style={cardStyle}>
            <h3>{u.name || "Nom inconnu"}</h3>
            <p><strong>Genre :</strong> {u.gender || "Non précisé"}</p>
            <p><strong>Âge :</strong> {u.age ?? "Inconnu"}</p>
            <p><strong>Métier :</strong> {u.occupation || "Non précisé"}</p>

            {Array.isArray(u.movies) && u.movies.length > 0 && (
              <details>
                <summary>Films notés</summary>
                <ul>
                  {u.movies.map((m, i) => (
                    <li key={`${u._id}-${i}`}>
                      Film : {m.movieid || "Inconnu"} — Note : {m.rating ?? "N/A"}
                    </li>
                  ))}
                </ul>
              </details>
            )}
          </div>
        ))}
      </div>

      <div style={paginationStyle}>
        <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1}>
          Précédent
        </button>
        <span>Page {currentPage} / {totalPages}</span>
        <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>
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
  width: '250px',
  backgroundColor: '#f0f8ff',
};

const paginationStyle = {
  marginTop: '20px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px'
};

export default Users;
