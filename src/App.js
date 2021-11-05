import './App.css';
import Subtitulo from "./components/Subtitulo.js";
import Titulo from "./components/Titulo.js";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <Titulo></Titulo>
    <Subtitulo comision="16i" estado={true}/>
    </>
  );
}

export default App;
