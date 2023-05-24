import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardColor = ({color, borrarColor}) => {
  return (
   
      <aside className="col-md-4 mb-3" >
        <Card>
          <Card.Header as="h5">{color}</Card.Header>
          <Card.Body className="Fondo">
           
            <Card.Text >
                
             <aside >
                <div className="ColorCard w-50" style={{background:color}}>

                </div>
             </aside>
            </Card.Text>
            
          </Card.Body>
          <Card.Footer>
           <aside className="text-end">
                <Button variant="danger"  onClick={()=>borrarColor(color)}>Borrar</Button>
            </aside>
            </Card.Footer> 
        </Card>
      </aside>
     
    
  );
};

export default CardColor;
