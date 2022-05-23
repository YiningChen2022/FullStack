import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch }from 'react-router-dom'
import './App.css';
import ListEmployeeComponents from './components/ListEmployeeComponents';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div >
      <Router>
        <HeaderComponent/>
        <div className = "container">
          <Switch>
            <Route path = "/ "component= {ListEmployeeComponents}></Route>
            <Route path = "/employees" component= {ListEmployeeComponents}></Route>
          </Switch>
          
        </div>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
