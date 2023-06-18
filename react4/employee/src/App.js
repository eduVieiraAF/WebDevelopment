import './App.css';
import EmployeeListing from './EmployeeListing';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <div>
        <h1>| REACT JS → CRUD |</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmployeeListing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
