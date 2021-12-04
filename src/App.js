import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './App.css';
function App() {
  return (
    <Container id="main-container" className="d-grid h-100">
    <Form id="sign-in-form" className="text-center p-3 w-100">
     <h1 className="Text">Complete the following question to win a Real Madrid jersey</h1>
     <Form.Group controlId="sign-in-email-address">
          <Form.Control type="email" size="lg" placeholder="Email address" autoComplete="username" className="position-relative" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="sign-in">
          <Form.Control type="Name" size="lg" placeholder="Enter your name" autoComplete="current-password" className="position-relative" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="sign-in">
          <Form.Control type="Phone number" size="lg" placeholder="Phone Number" autoComplete="current-username" className="position-relative" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="sign-in">
        <h1 className="Response"> How many UCL Real Madrid CF won? </h1>
          <Form.Control type="Answer" size="lg" placeholder="Answer here " autoComplete="current-country" className="position-relative" />
      </Form.Group>
      <Form.Group className="d-flex justify-content-center mb-4" controlId="Condition">
          <Form.Check className="accept" label="I accept all the condition" />
      </Form.Group>
      <div className="d-grid">
          <Button className="Button" variant="primary" size="lg">Complete information</Button>
      </div>
        <p className="mt-5 text-muted" id="Footer"  >&copy; Hala Madrid - Y nada mas</p>
      </Form>
    </Container>
  );
}
export default App;
