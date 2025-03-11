import logo from './logo.svg';
import './App.css';
import {Navbar,Container} from 'react-bootstrap';
import  Logo  from './assets/logo.svg'

function App() {
  return (
      <Navbar className="bg-dark">
        <Container fluid>
          <Navbar.Brand href="#home" className='text-light'>
            <img
              alt="Logo"
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            chipmunk school
           </Navbar.Brand>
        </Container>
      </Navbar>
  );
} 

export default App;
