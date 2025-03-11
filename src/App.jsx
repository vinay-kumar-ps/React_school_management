// App.js

import './App.css';
import AppNavbar from './components/AppNavbar';
import Sidebar from './components/Sidebar';
import {reactBrowserRouter}from 'react-router-dom';

function App() {
  return (
    <>
      <AppNavbar />
      <Sidebar />
    </>
  );
}

export default App;
