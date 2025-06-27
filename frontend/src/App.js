import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movies from './components/Movies';
import Users from './components/Users';

function App() {
  const [movies, setMovies] = useState([]); 
  const [users, setUsers] = useState([]);
  const [activeView, setActiveView] = useState('movies');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (activeView === 'movies') {
      axios.get('http://localhost:5000/movies?page=1&limit=100') 
        .then(res => {
          setMovies(res.data.movies || []); 
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    } else {
      axios.get('http://localhost:5000/users?page=1&limit=100')
        .then(res => {
          console.log("Users reçus:", res.data);
          setUsers(res.data.users || []);
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [activeView]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setActiveView('movies')} style={activeView === 'movies' ? btnActive : btn}>
          Voir les films
        </button>
        <button onClick={() => setActiveView('users')} style={activeView === 'users' ? btnActive : btn}>
          Voir les utilisateurs
        </button>
      </div>

      {loading && <p>Chargement en cours...</p>}

      {!loading && activeView === 'movies' && <Movies movies={movies} />}
      {!loading && activeView === 'users' && <Users users={users} />}
    </div>
  );
}

const btn = {
  marginRight: '10px',
  padding: '10px 20px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  background: '#f0f0f0',
  cursor: 'pointer',
};

const btnActive = {
  ...btn,
  background: '#007bff',
  color: '#fff',
  borderColor: '#007bff',
};

export default App;
