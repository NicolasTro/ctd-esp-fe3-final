import React from "react";
import {Link} from "react-router-dom";

const Card = ({ name, username, id }) => {
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };
// const dentist = { name, username, id }

  return (
    <div className="card">
      <Link to={"/detail/" + id}>
      <img src="/assets/images/doctor.jpg" style={{ width: "100%" }}></img>
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* <h3>{id}</h3> */}

      <h3>{name}</h3>
      <h3>{username}</h3>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
	  </Link>
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
