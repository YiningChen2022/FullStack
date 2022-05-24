
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
            <Route exact path = "/" element={<ListEmployeeComponents/>}/>
            <Route path = "/employees" element= {<ListEmployeeComponents/>}/>
            <Route path = "/add-employee" element= {<AddEmployeeComponent/>}/>
          </Routes>
        </div>

        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
