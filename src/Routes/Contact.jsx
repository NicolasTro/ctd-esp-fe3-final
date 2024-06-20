import Form from '../Components/Form'
import { useContextGlobalDentist } from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

const {state} = useContextGlobalDentist()
const tema= state.theme

  return (
    <div>
      <h2 className={tema==="dark"? "darkFont":"lightFont"}>Want to know more?</h2>
      <p className={tema==="dark"? "darkFont":"lightFont"}>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact