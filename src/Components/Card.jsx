import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobalDentist } from "../Context/Context";

const Card = ({ dentista }) => {
const{name, username, id} = dentista
  //Llamo al useContextGlobal
  const { state, dispatch } = useContextGlobalDentist();
  //A STATE LE PIDO EL THEME Y LO GUARDO EN UNA VARIABLE
  const tema = state.theme
  //FUNCION PARA SABER SI ES FAVORITO Y CAMBIAR EL ICONO DE CADA CARD
  const esFavorito = () => {
    const favoritosActuales = JSON.parse(localStorage.getItem("favorites")) || [];
    return favoritosActuales.some((favorito) => favorito.id === id);
  };

  const addFav = () => {
    //CREO UN FAVORITO PARA AGREGAR Y LO CARGO CON LOS DATOS DE LA CARD
    // const favoritoParaAgregar = { name, username, id };
    const favoritoParaAgregar = dentista;
    //PREGUNTO SI TENGO FAVORITOS ACTUALMENTE, SINO DEVUELVO UN ARRAY VACIO
    const favoritosActuales =
      JSON.parse(localStorage.getItem("favorites")) || [];
    //BUSCO SI HAY AL MENOS 1 FAVORITO
    const favoritoExiste = favoritosActuales.some(
      (favorito) => favorito.id === id
    );
    //SI EL FAVORITO NO EXISTE DENTRO DEL ARRAY, EN ACTUALIZAR, CARGO LOS FAVORITOS ACTUALES, MAS EL NUEVO FAVORITO
    if (!favoritoExiste) {
      const actualizar = [...favoritosActuales, favoritoParaAgregar];
      //SETEO EL LOCAL STORAGE CON EL NUEVO ARRAY ACTUALIZADO
      localStorage.setItem("favorites", JSON.stringify(actualizar));
      //DISPARO EL DISPATCH PARA ACTUALIZAR EL ESTADO DE FAVORITOS PASANDOLE ACTUALIZAR EN EL PAYLOAD
      dispatch({ type: "ADD_FAVS", payload: actualizar });
      alert("Dentista agregado a favoritos");
    } else {
      const nuevosFavoritos = favoritosActuales.filter(
        (favorito) => favorito.id !== id
      );
      localStorage.setItem("favorites", JSON.stringify(nuevosFavoritos));
      dispatch({ type: "REMOVE_FAV", payload: id });
      alert("Que pena que no sea mas tu favorito");
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
      <button onClick={addFav} className={`favButton ${tema === "dark" ? "botonOscuro" : ""}`}>
        {esFavorito() ? <img src="/assets/images/fav1.ico" className={`${tema === "dark" ? "iconoOscuro" : ""}`}></img> : <img src="/assets/images/fav.ico" className={`${tema === "dark" ? "iconoOscuro" : ""}`}></img>}
      </button>
    </div>
  );
};

export default Card;
