import React from "react";
import { useContextGlobalDentist } from "../Context/Context";
import Card from "../Components/Card";
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
              <Card dentista={dentista} key={index}/>
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
