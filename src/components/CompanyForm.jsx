import { useNavigate } from 'react-router-dom';
function CompanyForm() {
  //Instanciamos useNavigate
  const navigate = useNavigate();
  //Función para navegar
  const handleRoutesClick = () => {
    navigate('/routes');
  }
  const containerStyle = {
    
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
          <form>
            <div className="mb-3">
              <button className="btn btn-primary btn-block" onClick={handleRoutesClick()}>Gestionar Empresas</button>
            </div>
            <div className="mb-3">
            {/* <a href="/routes" className="btn btn-primary btn-block">
              Gestionar Rutas
            </a> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CompanyForm;
