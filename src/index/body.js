import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Button, Row } from "react-bootstrap";

const Body = () => {
    return (
        <Container className="pt-5 mt-5">
            <Row className="mt-5">
                <div class="col-xs-12 mt-5">
                    <h1 class="text-center text-light">¿Preparado para simplificar la<br/> administración de torneos?</h1>
                    <div  class="text-center mt-5">
                        <Button className="btn btn-success">Crear Torneo</Button>{"   "}
                        <Button className="btn btn-danger">Ver Torneos</Button>
                    </div>
                </div>
            </Row>
        </Container>
    );
}

export default Body;