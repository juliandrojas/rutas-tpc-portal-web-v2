import React, { useState } from "react";
import { supabase } from '../supabase/client';
function Login() {
  const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    //No reiniciar la página
    e.preventDefault();
    console.log(email);
    //console.log(password);
    try {
      const result = await supabase.auth.signInWithOtp({
        email, 
      })
      console.log(result);
    } catch (error) {
      console.log(error)
    }
  }
  const containerStyle = {
    backgroundImage: "url(/4.jpeg)",
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
          <h5>Ingrese o Regístrese</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="youremail@domain.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="yourpasswordhere"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div> */}
            <button type="submit" className="btn btn-primary btn-block">
              Ingresar
            </button>
          </form>
        </div>
        <div className="card-footer">
          <p>
            ¿No tienes una cuenta? <a href="/">Regístrate</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
