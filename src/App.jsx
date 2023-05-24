import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Formulario from "./Components/Formulario";
import CardColor from "./Components/CardColor";

function App() {
  
  return (
    <>
    <header>
      <h1 className="mx-5 fs-4">Administrador de colores</h1>
    </header>
      <Container className="my-5 main">
        <article className="container border border-3">
          
            <Formulario></Formulario>
         
        </article>
        <article className="m-5">
          <CardColor></CardColor>
        </article>
       

      </Container>
      <footer className="bg-dark text-light text-center py-4">
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
