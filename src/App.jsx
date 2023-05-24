import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Formulario from "./Components/Formulario";


function App() {
  
  return (
    <>
    <header>
      <h1 className="mx-5 fs-4">Administrador de colores</h1>
    </header>
      <Container className="my-5 main"> 
       <Formulario></Formulario>
      </Container>
      <footer className="bg-dark text-light text-center py-4">
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
