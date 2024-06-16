import React, { useEffect } from "react";
import { useContextGlobalDentist } from "../Context/Context";
import Card from "../Components/Card";

// import   useContextGlobalDentist  from "../Context/Context"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state, dispatch } = useContextGlobalDentist();
  console.log(state);

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        

        {state.data.lenght > 0 ? (
          state.data.map((dentista, index) => (
            <Card
              key={index}
              name={dentista.name}
              username={dentista.username}
              id={dentista.id}
            />
          ))
        ) : (
          <h3>No se han encontrado registros</h3>
        )}

        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  );
};

export default Home;
