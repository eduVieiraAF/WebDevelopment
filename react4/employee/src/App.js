import './App.css';
import { EmpCreate } from './EmpCreate';
import { EmpDetails } from './EmpDetails';
import { EmpEdit } from './EmpEdit';
import EmployeeListing from './EmployeeListing';
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <div>
        <h1 className='bg-dark text-info p-3 title'>| REACT JS • CRUD |</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmployeeListing />}></Route>
          <Route path='/employee/create' element={<EmpCreate />}></Route>
          <Route path='/employee/edit/empid' element={<EmpEdit />}></Route>
          <Route path='/employee/details/:empid' element={<EmpDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
