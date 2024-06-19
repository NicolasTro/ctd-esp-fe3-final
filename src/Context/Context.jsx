import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

const ContextGlobalDentist = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS":
      return { ...state, data: action.payload };
    case "DETAILS":
      return {...state, data: action.payload };
    case "ADD_FAVS":
      return {...state, favs: [...state.favs, action.payload]};
      case "CHANGE_THEME":
        return {...state, theme: state.theme ==="normal"? "dark": "normal"}
        case "REMOVE_FAV":
          return { ...state, favs: state.favs.filter((fav) => fav.id !== action.payload) };
  }
};

const Context = ({ children }) => {
  const initialState = {
    theme: "normal",
    data: [],
    url: "https://jsonplaceholder.typicode.com/users",
    favs: JSON.parse(localStorage.getItem('favorites')) || []
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios(initialState.url)
      .then((res) => dispatch({ type: "GET_DENTISTS", payload: res.data }))
      .catch((err) => console.log(err));
  }, [dispatch]);
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    <ContextGlobalDentist.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobalDentist.Provider>
  );
};

export default Context;
export const useContextGlobalDentist = () => useContext(ContextGlobalDentist);
