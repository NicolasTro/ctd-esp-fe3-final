import { Link } from "react-router-dom";
import { routes } from "../utils/Routes";
import { useContextGlobalDentist } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

const {state, dispatch} = useContextGlobalDentist()
console.log(state.theme);
const tema = state.theme;


  return (
    <>
      <nav >
        <div className={`normal ${tema}`}>
          <div className={`navBarIzquierdo ${tema==="dark"? "darkFont": "fondoNormal"}`} ><span style={{color:"Red"}}>D</span>H Odonto</div>
          <div className="navBarDerecho darkFont">
            <div className="container-fluid darkFont">
              <ul className="navbar-nav darkFont">
                <li>
                  <Link to={routes.Home} className={tema==="dark"? "darkFont": ""}>Home</Link>
                </li>
                <li>
                  <Link to={routes.Favs} className={tema==="dark"? "darkFont": ""}>Favs</Link>
                </li>
                <li>
                  <Link to={routes.Contact} className={tema==="dark"? "darkFont": ""}>Contact</Link>
                </li>
              </ul>
            </div>

            {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}

            {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

            <img
              src="/assets/images/Theme.ico"
              alt=""
              onClick={() => dispatch({ type: 'CHANGE_THEME' })}
              className={tema==="dark"? "darkIco": ""}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
