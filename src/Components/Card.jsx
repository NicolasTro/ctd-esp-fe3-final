import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobalDentist } from "../Context/Context";

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContextGlobalDentist();

  const addFav = () => {
    const favoritoParaAgregar = { name, username, id };

    const favoritosActuales = JSON.parse(localStorage.getItem("favorites"))||[];

     const favoritoExiste = favoritosActuales.some(
      (favorito) => favorito.id === id
    );

    console.log(favoritoExiste);
     if (!favoritoExiste) {
       const actualizar = [...favoritosActuales, favoritoParaAgregar];

      localStorage.setItem("favorites", JSON.stringify(actualizar));

      dispatch({ type: "ADD_FAVS", payload: actualizar });
      alert("Dentista agregado a favoritos")
    } else {


      const nuevosFavoritos = favoritosActuales.filter(
        (favorito) => favorito.id !== id
      );
      localStorage.setItem("favorites", JSON.stringify(nuevosFavoritos));
      dispatch({ type: "REMOVE_FAV", payload: id });
      alert("Que pena que no sea mas tu favorito")
    }
    

    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div className="card">
      <Link to={"/detail/" + id}>
        <img src="/assets/images/doctor.jpg"></img>
        <h3>{name}</h3>
        <h3>{username}</h3>
      </Link>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">
        <img src="/assets/images/fav.ico"></img>
      </button>
    </div>
  );
};

export default Card;
