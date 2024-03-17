import "./App.css";
import Home from "./Components/Home";
import Nosotros from "./Components/Nosotros";
import Barra from "./Components/Barra";
import Aprender from "./Components/Aprender";
import Ensenar from "./Components/Ensanar";
import Registrate from "./Components/Registrate";

function App() {
  return (
    <div className="App">
      <Barra />
      <Home />
      <Aprender />
      <Ensenar />
      <Nosotros />
      <Registrate />
    </div>
  );
}

export default App;
