import React, { useState } from "react";
import colors from "../colors";
import posterImage from "../assets/images/movie.avif";
import { FaAmazon, FaApple } from "react-icons/fa";
import { SiNetflix } from "react-icons/si";
import { TbBrandDisney } from "react-icons/tb";
import { SiAppletv } from "react-icons/si";
import { TbBrandHbo } from "react-icons/tb";


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
            <h3 style={serieTitle}>{s.title}</h3>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div style={{ flex: 1, marginRight: "20px" }}>
                <p style={paraSeries}>
                  <strong>Genres: </strong>{" "}
                  <span style={{ color: colors.textSecondary }}>
                    {Array.isArray(s.genre)
                      ? s.genre.join(", ").replace(/\|/g, " - ")
                      : s.genre.replace(/\|/g, " - ")}
                  </span>
                </p>
                {s.language && (
                  <p style={paraSeries}>
                    <strong>Langue: </strong>
                    <span style={{ color: colors.textSecondary }}>
                      {s.language}
                    </span>
                  </p>
                )}
                {s.year && (
                  <p style={paraSeries}>
                    <strong>Année: </strong>{" "}
                    <span style={{ color: colors.textSecondary }}>
                      {s.year}
                    </span>
                  </p>
                )}
                {s.seasons && (
                  <p style={paraSeries}>
                    <strong>Saisons: </strong>
                    <span style={{ color: colors.textSecondary }}>
                      {s.seasons}
                    </span>
                  </p>
                )}
                {s.synopsis && (
                  <p style={paraSeries}>
                    <strong>Synopsis: </strong>{" "}
                    <span style={{ color: colors.textSecondary }}>
                      {s.synopsis}
                    </span>
                  </p>
                )}
               {s.availableOn && (
  <p style={dispoSeries}>
    <strong>Disponible sur: </strong>{" "}
    {s.availableOn.map((platform, index) => {
      switch (platform) {
        case "Amazon Prime":
          return <FaAmazon key={index} style={{ marginRight: "16px", width: "2em", height: "2em" }} />;
        case "Netflix":
          return <SiNetflix key={index} style={{ marginRight: "16px", width: "2em", height: "2em" }} />;
        case "Disney+":
          return <TbBrandDisney key={index} style={{ marginRight: "16px", width: "2em", height: "2em" }} />;
        case "Hulu":
          return "hulu";
        case "Apple TV":
          return <SiAppletv  key={index} style={{ marginRight: "16px", width: "2em", height: "2em" }} />;
        case "HBO Max":
          return <TbBrandHbo key={index} style={{ marginRight: "16px", width: "2em", height: "2em" }} />;
        case "Apple TV+":
          return <FaApple key={index} style={{ marginRight: "16px",width: "2em", height: "2em" }} />;
        default:
          return null;
      }
    })}
  </p>
)}

              </div>
            </div>
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
  width: "550px",
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

const serieTitle = {
    display: "flex",
    justifyContent: "center",
  color: colors.primary,
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "10px",
};

const paraSeries = {
  margin: "0 0 10px 0",
  fontSize: "16px",
  color: colors.danger,
};

const dispoSeries = {
  margin: "0 0 10px 0",
  fontSize: "16px",
  color: colors.danger,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
};

export default Series;
