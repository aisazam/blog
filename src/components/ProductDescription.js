import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductDescription = ({ title, features }) => {
  return (
    <Container className="my-4">
      <Row>
        <Col>
          <h3 className="mb-3">{title}</h3>
          <ul className="list-unstyled">
            {features.map((feature, index) => (
              <li key={index} className="mb-2 d-flex align-items-start">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDescription;
