// import React from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = ( {dentist} ) => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  console.log(dentist);
  return (
    <>
      <h1>Detail Dentist id </h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>E-mail</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  );
};

export default Detail;
