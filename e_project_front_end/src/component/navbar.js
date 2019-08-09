import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast} from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const navbar = () =>{
  return(
      <Container fluid className="top_nav">
          <Row>
              <Col className="ml6 kk1 ">
                    <FontAwesomeIcon icon={faShippingFast} size="3x" className="mt3 inline"/> 
                    <h1 className="inline ml2">Omegos Shopping</h1>
               </Col>
              <Col lg={6}>
                <ol className="mt4">
                    <strong><li>HELP</li></strong>
                    <strong><li>ACCOUNT</li></strong>
                    <strong><li>CART</li></strong>
                </ol>
              </Col>
              </Row>
      </Container>
  )
}

export default navbar;