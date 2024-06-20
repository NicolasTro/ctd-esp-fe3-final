// import React from "react";
import Card from "../Components/Card";

import { useContextGlobalDentist } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state} = useContextGlobalDentist()
  const tema = state.theme
  const favoritos = JSON.parse(localStorage.getItem("favorites")) || [];
  return (
    <>
      <h1 className={tema==="dark"? "darkFont": "lightFont"}>Dentists Favs</h1>
      <div className="card-grid">
        {favoritos.length > 0 ? (
          favoritos.map((fav, index) => (
            <Card
              key={index}
              name={fav.name}
              username={fav.username} // Asegúrate de ajustar según la estructura de tus favoritos
              id={fav.id}
            />
          ))
        ) : (
          <h3 className={tema==="dark"? "darkFont": "lightFont"}>No favorites found</h3>
        )}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
