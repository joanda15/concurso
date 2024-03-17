import 'bootstrap/dist/css/bootstrap.css';
import "./Home.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

function Registrate() {
    return (
      <Container>
        <h1>Registrate</h1>
        <Row>
          <Col>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="textarea" placeholder="Nombre" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder='Contraseña' />
                    </Form.Group>
                </Form>
          </Col>
          <Col>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="textarea" placeholder="Apellido" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Button variant="dark">Registrarme</Button>
                    </Form.Group>
                </Form>
          </Col>
          <Col>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <h2>Gracias por ser parte de esta comunidad</h2>
                        <h1>♥</h1>
                    </Form.Group>
                </Form>
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default Registrate;