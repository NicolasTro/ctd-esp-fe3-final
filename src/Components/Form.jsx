import React, { useEffect, useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [nombreOK, setNombreOK] = useState(false);
  const [emailOK, setEmailOK] = useState(false);
  const [mensajeOK, setMensajeOK] = useState(false);
  const [nombreContacto, setNombreContacto] = useState("");

  const [error, setError] = useState(false);
  const [mensaje, setMensaje] = useState(false);
  const handleName = (e) => {
    if (e.target.value.length > 5) {
      setNombreOK(true);
      setNombreContacto(e.target.value);
      console.log(e.target.value);
    } else {
      setNombreOK(false);
      setNombreContacto("");
    }
  };

  useEffect(() => {
    if (nombreOK && emailOK) {
      setMensajeOK(true);
      // setError(false)
    } else {
      setMensajeOK(false);
      // setError(true)
    }
  }, [nombreOK, emailOK]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(error);
    if (mensajeOK) {
      setMensaje(true);
    } else {
      // if (!nombreOK || !emailOK) {
      setMensaje(false);
      setError(true);
      // }
    }
  };

  const handleEmail = (e) => {
    if (e.target.value.length > 5) {
      setEmailOK(true);
      console.log(emailOK);
    } else {
      setEmailOK(false);
    }
  };

  return (
    <div>
      <form>
        <label>Nombre completo:</label>
        <input type="text" onChange={handleName}></input>

        <label>Email:</label>
        <input type="text" onChange={handleEmail}></input>
        
        <button type="button" className="btn btn-light" onClick={handleSubmit}>Send</button>

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
