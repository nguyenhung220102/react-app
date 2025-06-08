import { Container, Row, Col } from 'reactstrap';

export default function AuthLayout({ image, children }) {
  return (
    <Container fluid className="vh-100 px-0">
      <Row noGutters className="h-100">
        <Col
          className="d-flex justify-content-center align-items-center bg-light"
        >
          <img
            src={image}
            alt="Auth Illustration"
            style={{ width: '956px', height: 'auto', objectFit: 'contain' }}
          />
        </Col>
        <Col className="d-flex flex-column justify-content-center align-items-center bg-white m-0">
          {children}
        </Col>
      </Row>
    </Container>
  );
}