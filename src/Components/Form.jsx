import React, { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [nombreOK, setNombreOK] = useState(false);
  const [emailOK, setEmailOK] = useState(false);
  
  const handleName = (e) => {
    if (e.target.value.length > 5) {
      setNombreOK(true);
      console.log(e.target.value);
    } else {
      setNombreOK(false);
    }
  };


  const handleEmail = (e) => {
     e.target.value.length>5 ? setEmailOK(true): setEmailOK(false);
  };

  return (
    <div>
      <form>
        <label>Nombre completo:</label>
        <input type="text" onChange={handleName}></input>

        <label>Email:</label>
        <input type="text" onChange={handleEmail}></input>
      </form>
    </div>
  );
};

export default Form;
