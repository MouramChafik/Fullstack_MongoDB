import React, { useEffect, useState } from "react";
import axios from "axios";
import Movies from "./components/Movies";
import Users from "./components/Users";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import colors from "./colors";
import Home from "./components/Home";
import Series from "./components/Series";

function App() {
  const [movies, setMovies] = useState([]);
  const [users, setUsers] = useState([]);
  const [series, setSeries] = useState([]);
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
        : activeView === "users"
        ? "http://localhost:5000/users?page=1&limit=100"
        : "http://localhost:5000/series?page=1&limit=100";
    axios
      .get(url)
      .then((res) => {
        if (activeView === "movies") setMovies(res.data.movies || []);
        else if (activeView === "users") setUsers(res.data.users || []);
        else if (activeView === "series") setSeries(res.data.series || []);
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
      <h1 style={dashboardTitleStyle}>Mongo APP</h1>
      <div style={{ padding: "20px", height: "50vh" }}>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
              width="80"
              height="80"
            >
              <radialGradient
                id="a10"
                cx=".66"
                fx=".66"
                cy=".3125"
                fy=".3125"
                gradientTransform="scale(1.5)"
              >
                <stop offset="0" stopColor="rgb(86 175 255)"></stop>
                <stop
                  offset=".3"
                  stopColor="rgb(86 175 255)"
                  stopOpacity=".9"
                ></stop>
                <stop
                  offset=".6"
                  stopColor="rgb(86 175 255)"
                  stopOpacity=".6"
                ></stop>
                <stop
                  offset=".8"
                  stopColor="rgb(86 175 255)"
                  stopOpacity=".3"
                ></stop>
                <stop
                  offset="1"
                  stopColor="rgb(86 175 255)"
                  stopOpacity="0"
                ></stop>
              </radialGradient>
              <circle
                transformOrigin="center"
                fill="none"
                stroke="url(#a10)"
                strokeWidth="15"
                strokeLinecap="round"
                strokeDasharray="200 1000"
                strokeDashoffset="0"
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
                transformOrigin="center"
                fill="none"
                opacity=".2"
                stroke="rgb(86 175 255)"
                strokeWidth="15"
                strokeLinecap="round"
                cx="100"
                cy="100"
                r="70"
              ></circle>
            </svg>
            <p
              style={{
                marginLeft: "20px",
                fontSize: "18px",
                color: "rgb(86 175 255)",
              }}
            >
              Chargement...
            </p>
          </div>
        )}
        {!loading && activeView === "home" && <Home />}
        {!loading && activeView === "dashboard" && <Dashboard />}
        {!loading && activeView === "series" && (
          <Series series={filteredItems.length > 0 ? filteredItems : series} />
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

const dashboardTitleStyle = {
  fontSize: "2.5rem",
  fontWeight: "700",
  color: colors.secondary,
  marginBottom: "20px",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  textAlign: "center",
  textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
};
