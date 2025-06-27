import React, { useEffect, useState } from "react";
import axios from "axios";
import Movies from "./components/Movies";
import Users from "./components/Users";
import Navbar from "./components/Navbar";

function App() {
  const [movies, setMovies] = useState([]);
  const [users, setUsers] = useState([]);
  const [activeView, setActiveView] = useState("movies");
  const [filteredItems, setFilteredItems] = useState([]);
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
        setFilteredItems([]); 
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  const handleSelect = (item) => {
    setFilteredItems([item]);
  };

  return (
    <>
      <Navbar
        activeView={activeView}
        setActiveView={setActiveView}
        onSelect={handleSelect}
      />
              <h1>Dashboard</h1>
      <div style={{ padding: "20px", height: "50vh",}}>
        {loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
              height: "100%",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="80"  
  height="80">
              <radialGradient
                id="a10"
                cx=".66"
                fx=".66"
                cy=".3125"
                fy=".3125"
                gradientTransform="scale(1.5)"
              >
                <stop offset="0" stop-color="rgb(86 175 255)"></stop>
                <stop
                  offset=".3"
                  stop-color="rgb(86 175 255)"
                  stop-opacity=".9"
                ></stop>
                <stop
                  offset=".6"
                  stop-color="rgb(86 175 255)"
                  stop-opacity=".6"
                ></stop>
                <stop
                  offset=".8"
                  stop-color="rgb(86 175 255)"
                  stop-opacity=".3"
                ></stop>
                <stop
                  offset="1"
                  stop-color="rgb(86 175 255)"
                  stop-opacity="0"
                ></stop>
              </radialGradient>
              <circle
                transform-origin="center"
                fill="none"
                stroke="url(#a10)"
                stroke-width="15"
                stroke-linecap="round"
                stroke-dasharray="200 1000"
                stroke-dashoffset="0"
                cx="100"
                cy="100"
                r="70"
              >
                <animateTransform
                  type="rotate"
                  attributeName="transform"
                  calcMode="spline"
                  dur="2"
                  values="360;0"
                  keyTimes="0;1"
                  keySplines="0 0 1 1"
                  repeatCount="indefinite"
                ></animateTransform>
              </circle>
              <circle
                transform-origin="center"
                fill="none"
                opacity=".2"
                stroke="rgb(86 175 255)"
                stroke-width="15"
                stroke-linecap="round"
                cx="100"
                cy="100"
                r="70"
              ></circle>
            </svg>
            <p style={{ marginLeft: "20px", fontSize: "18px", color: "rgb(86 175 255)" }}>
              Chargement...
            </p>
          </div>
        )}

        {!loading && activeView === "movies" && (
          <Movies movies={filteredItems.length > 0 ? filteredItems : movies} />
        )}
        {!loading && activeView === "users" && (
          <Users users={filteredItems.length > 0 ? filteredItems : users} />
        )}
      </div>
    </>
  );
}

export default App;
