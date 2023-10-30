import React from "react";

function NotFound() {
  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const imageStyle = {
    width: "300px",
    height: "300px",
    margin: "20px",
  };
  const buttonStyle = {
    textDecoration: "none",
  };

  return (
    <div style={containerStyle}>
      <div className="card text-center">
        <div className="card-header">
            <h2>Página no encontrada</h2>
        </div>
        <div className="card-body d-flex flex-column align-items-center">
          <img
            src="/imagen404.png"
            alt="Robot 404"
            style={imageStyle}
          />
          <a
            href="/"
            className="btn btn-danger"
            style={buttonStyle}
          >
            Volver a Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
