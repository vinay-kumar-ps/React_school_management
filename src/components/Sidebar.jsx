import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';


const sidebar = () => {
return(
    <div className="sidebar">
  <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
                       
          </Nav>
        </div>
)
}
export default sidebar;