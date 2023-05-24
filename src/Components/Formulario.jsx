import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Formulario = () => {
    return (
        <Form>
        <Form.Group className="m-3 row" controlId="formBasicEmail">
            <aside className='col-md-3'>
                <div className='ColorForm w-50'>

                </div>

            </aside>
            <aside className='col-md-7 mt-3'>
                <Form.Control type="text" placeholder="Ingrese un color ej Blue" />
            </aside>
          
          
          
        </Form.Group>
        <hr />
        <aside className='m-3 text-end'>
              <Button variant="primary" type="submit">
          Guardar
        </Button>
        </aside>
       
      
      </Form>
    );
};

export default Formulario;