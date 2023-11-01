import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabase/client";

function Company() {
  //Nombre de la empresa
  const [CompanyName, setCompanyName] = useState("");
  //Imagen de la empresa
  const [CompanyImage, setCompanyImage] = useState(null);
  //Obtener las empresas
  const [Empresas, setEmpresas] = useState([]);
  //useEffect para recuperar los datos de las empresas y mostrarlos
  useEffect(() => {
    async function fetchEmpresas() {
      try {
        const { data, error } = await supabase.from("empresas").select();
        if (error) {
          console.log("Error al obtener las empresas");
        } else {
          setEmpresas(data || []);
        }
      } catch (error) {
        console.log("Error en la solicitud: " + error);
      }
    }
    fetchEmpresas();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(CompanyName);
    console.log(CompanyImage.name);
    //Subimos el nombre y la imagen a supabase
    try {
      const file_path = CompanyImage.name;
      //Subimos al almacenamiento de supabase
      const { data: uploadImage, error: uploadError } = await supabase.storage
        .from("imagenesLogosEmpresas")
        .upload(file_path, CompanyImage);
      if (uploadError) {
        console.log("Error al subir la imagen " + uploadError);
      } else {
        console.log("Imagen subida con exito: " + uploadImage.path);
        const baseURL = process.env.REACT_APP_SUPABASE_URL;
        console.log(baseURL);
        const imageUrl =
          baseURL +
          "/storage/v1/object/public/imagenesLogosEmpresas/" +
          uploadImage.path;
        console.log("Url de la imagen: " + imageUrl);
        //Insertamos la informacion en la tabla Empresa
        const { data: insertData, error: insertError } = await supabase
          .from("empresas")
          .insert({ nombre: CompanyName, url_image: imageUrl });
        if (insertError) {
          console.log("Error al insertar datos:", insertError);
        } else {
          console.log("Datos insertados con éxito:", insertData);
        }
      }
    } catch (error) {
      console.log("Error en clase Company: " + error)
    }
  };
  return (
    <>
      <div className="card text-center">
        <div className="card-header">
          <h1>Dashboard de empresas</h1>
        </div>
        <div className="card-body">
          {/* Button Trigger Modal */}
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Cargar datos de la empresa
          </button>

          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Cargar datos de empresa
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="">Nombre de la empresa</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre de la empresa"
                        name="companyName"
                        onChange={(e) => setCompanyName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="">Imagen de la empresa</label>
                      <input
                        type="file"
                        className="form-control"
                        placeholder="Imagen de la empresa"
                        name="companyImage"
                        onChange={(e) => setCompanyImage(e.target.files[0])}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                      Ingresar datos de la empresa
                    </button>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cerrar Modal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Imagen</th>
              </tr>
            </thead>
            <tbody>
              {Empresas.map((empresa, index) => (
                <tr key={index} style={{ textAlign: "center" }}>
                  <th scope="row" style={{ verticalAlign: "middle" }}>
                    {empresa.id}
                  </th>
                  <td style={{ verticalAlign: "middle" }}>{empresa.nombre}</td>
                  <td style={{ verticalAlign: "middle" }}>
                    {/* Asegúrate de incluir la lógica para mostrar la imagen si es necesario */}
                    <img
                      src={`${empresa.url_image}`}
                      className="img-fluid"
                      alt=""
                      style={{
                        maxWidth: "50%",
                        maxHeight: "50%",
                        display: "block",
                        margin: "0 auto",
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <br />
      {/* Enlace a la página Home */}
      <Link to="/">
        <button className="btn btn-secondary btn-block">Volver a Inicio</button>
      </Link>
    </>
  );
}

export default Company;
