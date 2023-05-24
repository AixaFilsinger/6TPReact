import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CardColor from "./CardColor";
import { useState, useEffect } from "react";

const Formulario = () => {
  const [color, setColor] = useState("");
  let coloresenLocal = JSON.parse(localStorage.getItem('listadoColores')) || [];
  const [listaColores, setListaColores] = useState([coloresenLocal]);

  //funciones

  useEffect(()=>{
    localStorage.setItem('listadoColores', JSON.stringify(listaColores))
}, [listaColores])

  const handleSubmit = (e) => {
    e.preventDefault();
    setListaColores([...listaColores, color]);
    setColor("");
  };

  const borrarColor = (colorN)=>{
    let arregloFiltrado = listaColores.filter((item)=> item !== colorN)
    setListaColores(arregloFiltrado);
}
  return (
    <>
      <article className="container border border-3">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="m-3 row" controlId="color">
            <aside className="col-md-3">
              <div
                className="ColorForm w-50"
                style={{ background: color }}
              ></div>
            </aside>
            <aside className="col-md-7 mt-3">
              <Form.Control
                type="text"
                placeholder="Ingrese un color ej Blue"
                onChange={(e) => setColor(e.target.value)}
                value={color}
              />
            </aside>
          </Form.Group>
          <hr />
          <aside className="m-3 text-end">
            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </aside>
        </Form>
      </article>
      <article className="m-5">
        <section className="row">
         { listaColores.map((color, indice)=> <CardColor key={indice} color={color} borrarColor={borrarColor}></CardColor>)}
        </section>
      </article>
    </>
  );
};

export default Formulario;
