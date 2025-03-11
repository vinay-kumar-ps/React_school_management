import { Nav } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHouse ,faGraduationCap,faUserTie,faBook, faImagePortrait} from '@fortawesome/free-solid-svg-icons';



const Sidebar = () => {
return(
    <div className="sidebar">
  <Nav  defaultActiveKey= "/" className="flex-column">
            <Nav.Link href="/">
            <FontAwesomeIcon icon={faHouse} />
            <span className= "d-none d-md-inline">Dashboard</span>
            </Nav.Link>
            <Nav.Link href="/">
            <FontAwesomeIcon icon={faGraduationCap} />
            <span className= "d-none d-md-inline">students</span>
            </Nav.Link>
            <Nav.Link href="/">
            <FontAwesomeIcon icon={faUserTie} />
            <span className= "d-none d-md-inline">staff</span>
            </Nav.Link>        
            <Nav.Link href="/">
            <FontAwesomeIcon icon={faBook} />
            <span className= "d-none d-md-inline">library</span>
            </Nav.Link>           
            <Nav.Link href="/">
            <FontAwesomeIcon icon={faImagePortrait} />
            <span className= "d-none d-md-inline">accounts</span>
            </Nav.Link>
                       
          </Nav>
        </div>
);
};
export default Sidebar;