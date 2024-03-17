import "./App.css";
import Home from "./Components/Home";
import Nosotros from "./Components/Nosotros";
import Barra from "./Components/Barra";
import Aprender from "./Components/Aprender";
import Ensenar from "./Components/Ensanar";
import Registrate from "./Components/Registrate";
import { UsuarioBienvenida } from "./usuario-bienvenida/pagina/usuario-bienvenida";
import { UsuarioEnsenaBienvenidaPagina } from "./usuario-ensenar-transmitir/pagina/usuario-ensena-bienvenida-pagina"
function App() {
  return (
    <div className="App">
      <Barra />
      <Home />
      <Aprender />
      <Ensenar />
      <Nosotros />
      <Registrate />
      <UsuarioBienvenida />
      <UsuarioEnsenaBienvenidaPagina/>
    </div>
  );
}

export default App;
