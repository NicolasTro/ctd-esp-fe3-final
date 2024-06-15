import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

const ContextGlobalDentist = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS":
      return { ...state, data: action.payload };
      case "DETAILS":
        return {data: action.payload}
  }
};

const Context = ({ children }) => {
  const initialState = {
    theme: "",
    data: [],
    url: "https://jsonplaceholder.typicode.com/users",
  };


  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios(initialState.url)
      .then((res) => dispatch({ type: "GET_DENTISTS", payload: res.data }))
      .catch((err) => console.log(err));
  }, []);
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    <ContextGlobalDentist.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobalDentist.Provider>
  );
};

export default Context;
export const useContextGlobalDentist = () => useContext(ContextGlobalDentist);
