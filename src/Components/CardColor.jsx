import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardColor = () => {
  return (
    <section className="row">
      <aside className="col-md-4">
        <Card>
          <Card.Header as="h5">Nombre Color</Card.Header>
          <Card.Body className="Fondo">
           
            <Card.Text >
                
             <aside >
                <div className="ColorCard w-50">

                </div>
             </aside>
            </Card.Text>
            
          </Card.Body>
          <Card.Footer>
           <aside className="text-end">
                <Button variant="danger">Borrar</Button>
            </aside>
            </Card.Footer> 
        </Card>
      </aside>
      <aside className="col-md-4">
        <Card>
          <Card.Header as="h5">Nombre Color</Card.Header>
          <Card.Body className="Fondo">
           
            <Card.Text >
                
             <aside >
                <div className="ColorCard w-50">

                </div>
             </aside>
            </Card.Text>
            
          </Card.Body>
          <Card.Footer>
           <aside className="text-end">
                <Button variant="danger">Borrar</Button>
            </aside>
            </Card.Footer> 
        </Card>
      </aside>
      <aside className="col-md-4">
        <Card>
          <Card.Header as="h5">Nombre Color</Card.Header>
          <Card.Body className="Fondo">
           
            <Card.Text >
                
             <aside >
                <div className="ColorCard w-50">

                </div>
             </aside>
            </Card.Text>
            
          </Card.Body>
          <Card.Footer>
           <aside className="text-end">
                <Button variant="danger">Borrar</Button>
            </aside>
            </Card.Footer> 
        </Card>
      </aside>
    </section>
  );
};

export default CardColor;
