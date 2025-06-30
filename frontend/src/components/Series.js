import React, { useState } from "react";
import colors from "../colors";
import posterImage from "../assets/images/movie.avif";

function Series({ series = [] }) {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(series.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentSeries = series.slice(startIndex, startIndex + itemsPerPage);

  console.log("Séries affichées pour la page actuelle :", currentSeries);

  return (
    <div>
      <h2 style={seriesTitle}>Séries TV</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          justifyContent: "center",
        }}
      >
        {currentSeries.map((s, idx) => (
          <div key={idx} style={cardStyle}>
            <img src={posterImage} alt={s.title} style={imageStyle} />
            <h3>{s.title}</h3>
            <p>
              <strong>Genres:</strong>{" "}
              {Array.isArray(s.genre)
                ? s.genre.join(", ").replace(/\|/g, " - ")
                : s.genre.replace(/\|/g, " - ")}
            </p>
            {s.language && (
                <p>
                    <strong>Langue:</strong> {s.language}
                </p>
            )}
            {s.year && (
              <p>
                <strong>Année:</strong> {s.year}
              </p>
            )}
            {s.seasons && (
              <p>
                <strong>Saisons:</strong> {s.seasons}
              </p>
            )}
            {
                s.synopsis && (
                  <p style={{ marginTop: "10px" }}>
                    <strong>Synopsis:</strong> {s.synopsis}
                  </p>
                )}
            {s.availableOn && (
                <p>
                    <strong>Disponible sur:</strong> {s.availableOn}
                </p>
                )}
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
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "12px",
  width: "250px",
  backgroundColor: colors.success,
  color: colors.white,
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
  fontFamily: "Arial, sans-serif",
};

const imageStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "8px 8px 0 0",
  objectFit: "cover",
  marginBottom: "12px",
};

const seriesTitle = {
  color: colors.primary,
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
};

export default Series;
