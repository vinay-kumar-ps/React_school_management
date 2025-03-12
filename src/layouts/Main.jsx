import AppNavbar from '../components/AppNavbar';
import Sidebar from '../components/Sidebar';

function Main(props) {
  console.log(props);
    return (
      <>
        <AppNavbar />
        <div className='d-flex'>      
        <Sidebar />
        <div clasName= 'container-fluid'>
{props.children}

        </div>
         </div>
        </>
    );
  }
  
  export default Main;
  