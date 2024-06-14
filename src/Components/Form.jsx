import React from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form>
        <label>Nombre completo:</label>
        <input type="text"></input>
        
        <label>Email:</label>
        <input type="mail"></input>
        <label>Telefono:</label>
        <input type="text"></input>
        <label>Sitio Web:</label>
        <input type="text"></input>

      </form>
    </div>
  );
};

export default Form;
