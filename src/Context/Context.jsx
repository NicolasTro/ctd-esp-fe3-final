import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios"

const ContextGlobalDentist = createContext();

const reducer = (state, action)=>{

}




const Context = ({ children }) => {
    const initialState = { theme: "", data: [], url: "https://jsonplaceholder.typicode.com/users" };
    const url = "https://jsonplaceholder.typicode.com/users"

const [state, dispatch] = useReducer(reducer, initialState)



    useEffect(() => {
        axios(url)
            .then((res) => dispatch({ type: "CARGA_DENTISTAS", payload: res.data}))
            .catch(err => console.log(err));
    }, []);
	//Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

	return <ContextGlobalDentist.Provider value={{ state, dispatch }}>{children}</ContextGlobalDentist.Provider>;
};

export default Context;
export const useContextGlobalDentist = () => useContext(ContextGlobalDentist);
