import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar } from './components/Layout';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Notfound from './pages/Notfound';
import Employeelist from './pages/Employeelist';
import Admin from './pages/Admin';
import Employeedetails from './pages/Admin/Employee/Employeedetails';
import CreateEmployee from './pages/Admin/Employee/CreateEmployee';
import Editemployee from './pages/Admin/Employee/Editemployee';

function App(){
  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/employees' element={<Employeelist></Employeelist>}/>
      <Route path='/create' element={<Admin></Admin>}/>
      <Route path='/admin/employees' element={<Employeedetails></Employeedetails>}/>
      <Route path='/admin/employees/create' element={<CreateEmployee></CreateEmployee>}/>
      <Route path='/admin/employees/edit' element={<Editemployee></Editemployee>}/>
      <Route path='*' element={<Notfound></Notfound>}/>
    </Routes>
  
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


