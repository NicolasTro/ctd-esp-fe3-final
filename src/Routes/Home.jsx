import React, { useEffect } from "react";
import { useContextGlobalDentist } from "../Context/Context";
import Card from "../Components/Card";

// import   useContextGlobalDentist  from "../Context/Context"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state, dispatch } = useContextGlobalDentist();
  const tema = state.theme;
  return (
    <main className="">
      <h1 className={tema === "dark" ? "darkFont" : "lightFont"}>Home</h1>
      <div className="card-grid">
        {state !== null ? (
          state.data.length > 0 ? (
            state.data.map((dentista, index) => (
              <Card
                key={dentista.id}
                name={dentista.name}
                username={dentista.username}
                id={dentista.id}
              />
            ))
          ) : (
            <h3 className={tema === "dark" ? "darkFont" : "lightFont"}>Dentists not found</h3>
          )
        ) : (
          <h3 className={tema === "dark" ? "darkFont" : "lightFont"}>Dentist not found</h3>
        )}

        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  );
};

export default Home;
