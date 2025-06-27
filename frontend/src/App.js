import React, { useEffect, useState } from "react";
import axios from "axios";
import Movies from "./components/Movies";
import Users from "./components/Users";
import Navbar from "./components/Navbar";

function App() {
  const [movies, setMovies] = useState([]);
  const [users, setUsers] = useState([]);
  const [activeView, setActiveView] = useState("movies");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [activeView]);

  const fetchData = () => {
    setLoading(true);
    const url =
      activeView === "movies"
        ? "http://localhost:5000/movies?page=1&limit=100"
        : "http://localhost:5000/users?page=1&limit=100";

    axios
      .get(url)
      .then((res) => {
        if (activeView === "movies") setMovies(res.data.movies || []);
        else setUsers(res.data.users || []);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  const handleSearch = (item) => {
    // filtre les résultats
    console.log("Item sélectionné:", item);
  };

  return (
    <>
      <Navbar
        activeView={activeView}
        setActiveView={setActiveView}
        onSearch={handleSearch}
      />
      <div style={{ padding: "20px" }}>
        <h1>Dashboard</h1>

        {loading && <p>Chargement en cours...</p>}

        {!loading && activeView === "movies" && <Movies movies={movies} />}
        {!loading && activeView === "users" && <Users users={users} />}
      </div>
    </>
  );
}

export default App;
