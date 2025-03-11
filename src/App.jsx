import logo from './logo.svg';
import './App.css';
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import  Logo  from './assets/logo.svg'

function App() {
  return (
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home" className='text-light'>
            <img
              alt="Logo"
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Thalassa 
           </Navbar.Brand>
           <Navbar.Toggle aria-controls="navbar-dark" />
        <Navbar.Collapse id="navbar-dark">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="contact us"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.2">
                Our team
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Products</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Mail us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
  );
} 

export default App;
