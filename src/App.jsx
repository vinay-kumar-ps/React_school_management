// App.js

import './App.css';

import { RouterProvider}from 'react-router-dom';
import router from './router';

function App() {
  return (
    <>
      {/* <AppNavbar />
      <Sidebar /> */}
      <RouterProvider router={router}/>
      </>
  );
}

export default App;
