import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/esm/Button';
import "./Home.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const Aprender =()=>{
    return (
        <Container>
        <Row>
          <Col>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <header className='Aprender'>
                            <h1>QUIERO APRENDER!</h1>
                            <h3>Tienes disponibles tutores y equipos colaborativos.</h3>
                            <p>Sumá conocimientos de una manera sencilla y amable.</p>
                            <Button variant='dark'>COMENZAR</Button>
                        </header>
                    </Form.Group>
                </Form>
          </Col>
          <Col>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <header className='Ensenar'>
                            <h1>QUIERO ENSEÑAR!</h1>
                            <h3>Aprovechá tu potencial para ayudar a los otr@s.</h3>
                            <p>Utilizá este espacio compartir lo que te apasiona.</p>
                            <Button variant='dark'>COMENZAR</Button>
                        </header>
                    </Form.Group>
                </Form>
          </Col>
        </Row>
      </Container>
    )
}

export default Aprender;