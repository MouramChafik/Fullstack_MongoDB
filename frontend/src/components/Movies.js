import React, { useState } from "react";
import colors from "../colors";
import posterImage from "../assets/images/movie.avif";

function Movies({ movies = [] }) {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(movies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentMovies = movies.slice(startIndex, startIndex + itemsPerPage);

  console.log("Films affichés pour la page actuelle :", currentMovies);

  return (
    <div>
      <h2 style={moviesTitle}>Films</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          justifyContent: "center",
        }}
      >
        {currentMovies.map((m, idx) => (
          <div key={idx} style={cardStyle}>
            <img src={posterImage} alt={m.name} style={imageStyle} />
            <h3 style={movieTitle}>
              {m.title.split("(").length > 1 ? (
                <>
                  {m.title.split("(")[0].trim()}
                  <br />
                  <p>{"(" + m.title.split("(").slice(1).join("(")}</p>
                </>
              ) : (
                m.title
              )}
            </h3>
           <p style={paraMovies}>
              <strong>Genres:{" "} </strong>{" "}
              <span style={{ color: colors.textSecondary }}>
              {Array.isArray(m.genres)
                ? m.genres.join(", ").replace(/\|/g, " - ")
                : m.genres.replace(/\|/g, " - ")}
                </span>
            </p>
          </div>
        ))}
      </div>
      <div style={paginationStyle}>
        <button
          style={btnpaginationPrevious}
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Précédent
        </button>
        <span style={pageIndicatorStyle}>
          Page {currentPage} / {totalPages}
        </span>
        <button
          style={btnpaginationNext}
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Suivant
        </button>
      </div>
    </div>
  );
}

const cardStyle = {
  borderRadius: "8px",
  padding: "12px",
  width: "350px",
  backgroundColor: colors.backgroundLight,
  boxShadow: "4px 5px 4px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s, box-shadow 0.2s",
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
};

const paginationStyle = {
  marginTop: "20px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  justifyContent: "center",
};

const btnBase = {
  padding: "10px 20px",
  borderRadius: "8px",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: colors.success,
  background: colors.success,
  color: "#ffffff",
  cursor: "pointer",
  fontWeight: "bolder",
  fontSize: "14px",
  boxShadow: "0 2px 6px rgba(0, 123, 255, 0.2)",
};

const btnpaginationPrevious = {
  ...btnBase,
  background: colors.fourth,
  borderColor: colors.fourth,
};

const btnpaginationNext = {
  ...btnBase,
  marginLeft: "10px",
  background: colors.fourth,
  borderColor: colors.fourth,
};

const pageIndicatorStyle = {
  padding: "6px 12px",
  color: colors.success,
  fontWeight: "800",
  fontSize: "20px",
  fontGrid: "Arial, sans-serif",
};

const imageStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "8px 8px 0 0",
  objectFit: "cover",
  marginBottom: "12px",
};

const moviesTitle = {
  color: colors.primary,
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
};

const movieTitle = {
    display: "flex",
    justifyContent: "space-around",
  textAlign: "center",
  color: colors.primary,
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "10px",
};
const paraMovies = {
  margin: "0 0 10px 0",
  fontSize: "16px",
  color: colors.danger,
};
export default Movies;
