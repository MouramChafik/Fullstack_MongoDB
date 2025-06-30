import React from "react";

const Home = () => {
  const [hover, setHover] = React.useState(false);

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <img
          src="https://img.icons8.com/color/96/000000/mongodb.png"
          alt="MongoDB Logo"
          style={logoStyle}
        />
        <h1 style={titleStyle}>Bienvenue sur l'application MongoDB</h1>
        <p style={descStyle}>
          Gérez vos données facilement avec une interface moderne et intuitive.
          <br />
          Utilisez le menu pour explorer toutes les fonctionnalités.
        </p>
        <a
          href="/dashboard"
          style={{
            ...linkStyle,
            background: hover ? "#8f94fb" : "#4e54c8",
          }}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        >
          Accéder au tableau de bord
        </a>
      </div>
    </div>
  );
};

export default Home;

const containerStyle = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, #4e54c8 0%, #8f94fb 100%)",
  color: "#fff",
  fontFamily: "Segoe UI, sans-serif",
};

const cardStyle = {
  background: "rgba(255,255,255,0.1)",
  borderRadius: "16px",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  backdropFilter: "blur(4px)",
  padding: "3rem 2rem",
  maxWidth: "400px",
  textAlign: "center",
};

const logoStyle = {
  marginBottom: "1rem",
};

const titleStyle = {
  marginBottom: "1rem",
  fontWeight: 700,
};

const descStyle = {
  fontSize: "1.1rem",
  marginBottom: "2rem",
};

const linkStyle = {
  display: "inline-block",
  padding: "0.75rem 2rem",
  background: "#4e54c8",
  color: "#fff",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: 600,
  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
  transition: "background 0.2s",
};
