import React, { useEffect, useState } from "react";
import { useContextGlobalDentist } from "../Context/Context";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [nombreOK, setNombreOK] = useState(false);
  const [emailOK, setEmailOK] = useState(false);
  const [mensajeOK, setMensajeOK] = useState(false);
  const [nombreContacto, setNombreContacto] = useState("");
  const { state } = useContextGlobalDentist()
  const tema = state.theme

  const [error, setError] = useState(false);
  const [mensaje, setMensaje] = useState(false);
  const handleName = (e) => {
    if (e.target.value.length > 5) {
      setNombreOK(true);
      setNombreContacto(e.target.value);
    } else {
      setNombreOK(false);
      setNombreContacto("");
    }
  };

  useEffect(() => {
    if (nombreOK && emailOK) {
      setMensajeOK(true);
    } else {
      setMensajeOK(false);
    }
  }, [nombreOK, emailOK]);

  const handleSubmit = () => {
    if (mensajeOK) {
      setMensaje(true);
      setTimeout(() => {
        setMensaje(false);
      }, 2500);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  const validarEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  const handleEmail = (e) => {
    if (validarEmail(e.target.value)) {
      setEmailOK(true);
    } else {
      setEmailOK(false);
    }
  };
  return (
    <div>
      <form>
        <label className={tema === "dark" ? "darkFont" : ""}>Nombre completo:</label>
        <input type="text" onChange={handleName}></input>

        <label className={tema === "dark" ? "darkFont" : ""}>Email:</label>
        <input type="text" onChange={handleEmail}></input>

        <button type="button" className={`btn ${tema === "dark" ? "btn-dark" : "btn-light"}`} onClick={handleSubmit}>Send</button>

      </form>
      {mensaje ? (
        <div>
          Gracias {nombreContacto}, te contactaremos cuanto antes via mail
        </div>
      ) : error ? (
        <h3 className="validacion">Verifique su informacion nuevamente</h3>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Form;
