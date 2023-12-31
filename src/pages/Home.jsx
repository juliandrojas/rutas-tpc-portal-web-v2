import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/client";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    //Si el objeto usuario no existe
    if(!supabase.auth.getUser()) {
      navigate("/login")
    }
    console.log(supabase.auth.getUser());
  }, [navigate])
  
  const handleCompanyClick = () => {
    navigate('/company/');
  };
  const handleRoutesClick = () => {
    navigate('/routes/');
  };

  const handleLogoutClick = () => {
    supabase.auth.signOut();
  };

  const containerStyle = {
    backgroundImage: "url(/FondoMenu.jpeg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={containerStyle}>
      <div className="card text-center">
        <div className="card-header">
          <h5>Gestión de Empresas y Rutas</h5>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <button className="btn btn-primary btn-block" onClick={handleCompanyClick}>
              Gestionar Empresas
            </button>
          </div>
          <div className="mb-3">
            <button className="btn btn-primary btn-block" onClick={handleRoutesClick}>
              Gestionar Rutas
            </button>
          </div>
          <div className="mb-3">
            <button className="btn btn-secondary btn-block" onClick={handleLogoutClick}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
