import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes }from 'react-router-dom'
import './App.css';
import ListEmployeeComponents from './components/ListEmployeeComponents';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
  return (
    <div >
      <Router>
        <HeaderComponent/>
        <div className = "container">
          <Routes>
            <Route exactpath = "/" element={<ListEmployeeComponents/>}></Route>
            <Route path = "/employees" element={<ListEmployeeComponents/>}></Route>
            <Route path = "/add-employees" element={<AddEmployeeComponent/>}></Route>
          </Routes>
          
        </div>

        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
