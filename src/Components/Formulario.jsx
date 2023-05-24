import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';

const Formulario = () => {
    const [color, setColor] = useState('');
  const [listaColores, setListaColores]= useState([]);

  //funciones

  const handleSubmit = (e)=>{
    e.preventDefault();
    setListaColores([...listaColores, color])
   setColor('');
   
  }
    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="m-3 row" controlId="color">
            <aside className='col-md-3'>
                <div className='ColorForm w-50' style={{background:color}}>

                </div>

            </aside>
            <aside className='col-md-7 mt-3'>
                <Form.Control type="text" placeholder="Ingrese un color ej Blue" onChange={(e)=> setColor(e.target.value) } value={color} />
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