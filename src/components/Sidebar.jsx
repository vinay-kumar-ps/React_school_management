import { Nav } from 'react-bootstrap';


const Sidebar = () => {
return(
    <div className="sidebar">
  <Nav  defaultActiveKey= "/" className="flex-column">
            <Nav.Link href="/">Dashboard</Nav.Link>
            <Nav.Link href="/stduents">stduents</Nav.Link>
            <Nav.Link href="/staffs">staffs</Nav.Link>
            <Nav.Link href="/library">library</Nav.Link>
            <Nav.Link href="/accounts">accounts</Nav.Link>
                       
          </Nav>
        </div>
);
};
export default Sidebar;